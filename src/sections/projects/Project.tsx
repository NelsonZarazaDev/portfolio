import DynamicIcon from "@/components/own/DynamicIcon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects, textGroupProject } from "@/data/sectionProjectContentInfo";

export default function Project() {
  return (
    <>
      <div className="flex">
        <div>
          <div>
            {textGroupProject[0].title}{" "}
            <span>{textGroupProject[0].subtitle}</span>{" "}
          </div>
          <div>{textGroupProject[0].description}</div>
        </div>
        <div>imagen</div>
      </div>

      <div>
        {projects.map((items, index1) => {
          return (
            <Card key={index1}>
              <div className="flex">
                <div>
                  <div className="flex">
                    <Card>
                      <DynamicIcon icon={items.icon} />
                    </Card>
                    <div>
                      <div>{items.card.title}</div>
                      <div>{items.card.subtitle}</div>
                    </div>
                  </div>
                  <div>{items.card.description}</div>

                  <div className="flex">
                    {items.info.map((item, index2) => {
                      return (
                        <Card key={index2}>
                          <div className="flex">
                            <DynamicIcon icon={item.icon} />
                            <div>{item.title}</div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>

                  {items.card.buttons?.map((button, indexButton) => {
                    return (
                      <Button key={indexButton}>
                        <DynamicIcon icon={button.icon} />
                        <div>{button.text}</div>
                      </Button>
                    );
                  })}
                </div>
                <div>Imagen</div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
