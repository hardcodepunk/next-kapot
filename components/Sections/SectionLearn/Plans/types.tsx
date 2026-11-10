export interface IPlanDetail {
  label: string
  value: string[]
}

export interface IPlan {
  title: string
  price: string
  description: string[]
  list: string[]
  details?: IPlanDetail[]
  buttonLink: string
  buttonLabel: string
}
