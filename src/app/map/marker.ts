export class Marker {
  pwrModuleId: number
  assetId: number
  assetType: string
  lat: number
  lng: number
  label?: string
  alpha: number
  draggable: boolean
  icon: string
  selected: boolean
  size: {
      width: number
      height: number
  }
  scaledSize: {
      width: number
      height: number
  }
  options: {
    animation: any
  }
  constructor({
      pwrModuleId = 0,
      assetId = 0,
      assetType = '',
      lat = 0,
      lng = 0,
      label = '',
      alpha = 1,
      draggable = false,
      icon = '',
      selected = false,
      size = {width: 0, height: 0},
      scaledSize = {width: 0, height: 0},
      options = { animation: null  },
      ...rest
  }) {
      this.pwrModuleId = pwrModuleId
      this.assetId = assetId
      this.assetType = assetType
      this.lat = lat
      this.lng = lng
      this.label = label
      this.alpha = alpha
      this.draggable = draggable
      this.icon = icon
      this.selected = selected
      this.size = size
      this.scaledSize = scaledSize
      this.options = options
  }

}
