import DynamicIcon from "@/components/own/DynamicIcon";
import { Card } from "@/components/ui/card";
import {
  sectionAboutContentInfo,
  cardInfo,
} from "@/data/sectionAboutContentInfo";

export default function aboutMe() {
  return (
    <div>
      <div>
        <h1>{sectionAboutContentInfo[0].title}</h1>
        <h2>{sectionAboutContentInfo[0].subtitle}</h2>
        <p>{sectionAboutContentInfo[0].paragraphs[0]}</p>
        <p>{sectionAboutContentInfo[0].paragraphs[1]}</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cardInfo.map((item, index) => {
          return (
            <Card key={index}>
              <DynamicIcon icon={item.icon} />
              <div>{item.title}</div>
              <div>{item.description}</div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
