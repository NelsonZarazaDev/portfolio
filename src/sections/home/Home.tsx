import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { sectionHeroContentInfo, metricInfo, stackInfo } from "@/data/sectionHeroContentInfo";

export default function Home() {
  return (
    <div className="flex">
      <div className="space-y-4">
        <h1>{sectionHeroContentInfo[0].title}</h1>
        <h2>{sectionHeroContentInfo[0].subtitle}</h2>
        <p>{sectionHeroContentInfo[0].paragraph[0]}</p>
        <p>{sectionHeroContentInfo[0].paragraph[1]}</p>

        <div>
          {sectionHeroContentInfo[0].buttons?.map((item, index) => {
            return (
              <Button key={index}>
                <item.icon />
                {item.text}
              </Button>
            );
          })}
        </div>

        <div className="flex">
          {metricInfo.map((elemnts, index) => {
            return (
              <div className="flex">
                <elemnts.icon />
                <div>
                  <div>{elemnts.title}</div>
                  <div>{elemnts.description}</div>
                </div>
                {index < metricInfo.length - 1 && (
                  <Separator orientation="vertical" />
                )}
              </div>
            );
          })}
        </div>

        <Separator orientation="horizontal" />

        <div className="grid grid-cols-4 gap-4">
          {stackInfo.map((item, index) => {
            return (
              <Card key={index}>
                <img src={item.img} alt="" />
                <div>{item.name}</div>
              </Card>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
