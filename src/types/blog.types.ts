export interface BlogDataType {
    id: number
    documentId: string
    title: string
    breadcrumb: string
    description: string
    authorName: string
    blogContent: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    coverImg: CoverImg[]
    tags: Tag[]
  }
  
  export interface CoverImg {
    id: number
    documentId: string
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: ProviderMetadata5
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Formats {
    large: Large
    small: Small
    medium: Medium
    thumbnail: Thumbnail
  }
  
  export interface Large {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata
  }
  
  export interface ProviderMetadata {
    public_id: string
    resource_type: string
  }
  
  export interface Small {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata2
  }
  
  export interface ProviderMetadata2 {
    public_id: string
    resource_type: string
  }
  
  export interface Medium {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata3
  }
  
  export interface ProviderMetadata3 {
    public_id: string
    resource_type: string
  }
  
  export interface Thumbnail {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
    provider_metadata: ProviderMetadata4
  }
  
  export interface ProviderMetadata4 {
    public_id: string
    resource_type: string
  }
  
  export interface ProviderMetadata5 {
    public_id: string
    resource_type: string
  }
  
  export interface Tag {
    id: number
    tags: string
  }
  