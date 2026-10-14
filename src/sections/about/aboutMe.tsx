import DynamicIcon from "@/components/own/DynamicIcon";
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import { Card } from "@/components/ui/card";
import {
  sectionAboutContentInfo,
  cardInfo,
  journeySectionContentInfo,
} from "@/data/sectionAboutContentInfo";

export default function AboutMe() {
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

      <div className="flex">
        <div className="flex">
          <DynamicIcon icon={journeySectionContentInfo[0].data.icon} />
          <div>
            <div>{journeySectionContentInfo[0].data.title}</div>
            <div>{journeySectionContentInfo[0].data.description}</div>
          </div>
        </div>

        <Timeline orientation="horizontal">
          {journeySectionContentInfo[0].items.map((items, index) => {
            return (
              <TimelineItem key={index + 1} step={index + 1}>
                <TimelineHeader>
                  <TimelineTitle>{items.title}</TimelineTitle>
                  <TimelineContent>{items.description}</TimelineContent>
                </TimelineHeader>
                <TimelineSeparator />
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
