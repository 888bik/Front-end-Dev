// 在js中,null表示有值,但是空值,undefined表示没有值
// 但在ts中,俩者都是有具体意义的类型,这俩者在没有开启严格类型检查的时候,会被认为其他类型的子类型,比如string

// 仅在关闭下成立
// const message: string = null; // "strict": false默认开启
// const message:string = undefined


export {}