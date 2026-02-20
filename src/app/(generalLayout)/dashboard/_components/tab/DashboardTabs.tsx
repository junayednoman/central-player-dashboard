import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PeopleTabContent from "../tabContent/PeopleTabContent";

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="players">
      <TabsList className="mb-3 h-12 w-full rounded-xl border border-border bg-transparent p-1">
        <TabsTrigger
          value="players"
          className="data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Players
        </TabsTrigger>
        <TabsTrigger
          value="coaches"
          className="data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Coaches
        </TabsTrigger>
        <TabsTrigger
          value="scouts"
          className="data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Scouts
        </TabsTrigger>
      </TabsList>

      <TabsContent value="players">
        <PeopleTabContent roleLabel="Player" />
      </TabsContent>
      <TabsContent value="coaches">
        <PeopleTabContent roleLabel="Coach" />
      </TabsContent>
      <TabsContent value="scouts">
        <PeopleTabContent roleLabel="Scout" />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
