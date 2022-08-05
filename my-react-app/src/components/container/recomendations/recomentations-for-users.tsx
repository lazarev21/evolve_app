import { RecomendationForUserItem } from "./recomentations-for-users-item";
//TODO
//ПРОПИСАТЬ ТИПЫ

export function RecommendationsForUsers({ recomendationData }: any) {
  return (
    <>
      {recomendationData.map((item: any, index: number) => (
        <RecomendationForUserItem key={index} userData={item} />
      ))}
    </>
  );
}
