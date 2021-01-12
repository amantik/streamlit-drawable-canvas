import { fabric } from "fabric"

export interface ConfigureCanvasProps {
    fillColor: string
    strokeWidth: number
    strokeColor: string
}

/**
 * Base class for any fabric tool that configures and draws on canvas
 */
abstract class FabricTool {
  protected _canvas: fabric.Canvas
  protected _props: object

  /**
   * Pass Fabric canvas by reference so tools can configure it
   */
  constructor(canvas: fabric.Canvas, props: object = {}) {
    this._canvas = canvas
    this._props = props
  }

  /**
   * Configure canvas and return a callback to clean eventListeners
   * @param args
   */
  abstract configureCanvas(args: ConfigureCanvasProps): () => void
}

export default FabricTool
