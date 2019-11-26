import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'
import Spinner from 'part:@sanity/components/loading/spinner'
import { Asset, AssetDocument } from '../types'
import Button from 'part:@sanity/components/buttons/default'

import styles from './AIFaceAssetSource.css'

type Props = {
  onSelect: (assets: Asset[]) => void
  onClose: () => void
  selectedAssets?: AssetDocument[]
  selectionType: 'single' | 'multiple'
}

type State = {
  isLoading: boolean
  didLoad: boolean
  cacheBuster: number
}

export default class AIFaceAssetSource extends React.Component<Props, State> {
  canvasRef: React.RefObject<HTMLCanvasElement>
  imgRef: React.RefObject<HTMLImageElement>

  constructor(props: Props) {
    super(props)
    this.canvasRef = React.createRef()
    this.imgRef = React.createRef()
  }

  componentDidMount() {
    console.log('did mount')
  }

  static defaultProps = {}

  state = {
    isLoading: true,
    didLoad: false,
    cacheBuster: new Date().getTime()
  }

  handleClose = () => {
    this.props.onClose()
  }

  handleSaveImage() {
    const canvas = this.canvasRef.current
    if (!canvas) {
      console.log('Error: No canvas!')
      return
    }

    const value: string = canvas.toDataURL()
    const asset: Asset = {
      kind: 'base64',
      value: value,
      assetDocumentProps: {
        source: {
          name: 'thispersondoesnotexist.com',
          id: String(new Date().getTime())
        },
        creditLine: 'https://thispersondoesnotexist.com'
      }
    }
    this.props.onSelect([asset])
  }

  handleImageLoaded() {
    const canvas = this.canvasRef.current
    const img = this.imgRef.current
    if (!canvas || !img) {
      return
    }
    canvas.getContext('2d')?.drawImage(img, 0, 0)
    this.setState({ isLoading: false, didLoad: true })
  }

  render() {
    const { isLoading, didLoad, cacheBuster } = this.state
    // The source is missing cors headers, so we need to proxy these requests
    const url = `https://cors-anywhere.herokuapp.com/https://thispersondoesnotexist.com/image?key=${cacheBuster}`

    return (
      <Dialog
        title="Select face from thispersondoesnotexist.com"
        onClose={this.handleClose}
        isOpen
      >
        <div className={styles.root}>
          <div className={styles.buttons}>
            <Button
              disabled={isLoading}
              onClick={() =>
                this.setState({ isLoading: true, cacheBuster: this.state.cacheBuster + 1 })
              }
            >
              Generate new
            </Button>
            <Button
              disabled={isLoading || !didLoad}
              onClick={() => {
                this.handleSaveImage()
              }}
            >
              Pick this one
            </Button>
          </div>
          <div className={styles.wrapper}>
            {isLoading && <Spinner inline />}
            <canvas className={styles.canvas} ref={this.canvasRef} width={1024} height={1024} />
          </div>
          <img
            onError={() => this.setState({ isLoading: false })}
            onLoad={() => this.handleImageLoaded()}
            ref={this.imgRef}
            src={url}
            crossOrigin="anonymous"
            className={styles.image}
          />
        </div>
      </Dialog>
    )
  }
}
