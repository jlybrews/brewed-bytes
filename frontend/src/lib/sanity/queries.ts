export const featuredPostsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...6] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title,
  "excerpt": array::join(string::split(pt::text(body), "")[0..200], "") + "..."
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "author": author->name,
  "categories": categories[]->title,
  body
}`;