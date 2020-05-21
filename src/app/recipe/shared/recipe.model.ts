export interface Recipe {
  title: string
  id: string // Future UUID
  profile: RecipeProfile,
  summary: string
}

export interface RecipeProfile {
  authorId: string // UUID
  authorName: string
}
