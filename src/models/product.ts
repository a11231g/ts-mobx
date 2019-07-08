interface productInnerObj {
    name: string,
    desc?: string,
    image?: string,
    price?: string
}

export interface ProductModel {
    catName: string,
    data: Array<productInnerObj>
}