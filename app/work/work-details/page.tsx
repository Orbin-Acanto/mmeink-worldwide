import EventDetailsSection from "@/components/EventDetailsSection";
import WorkHero from "@/components/work/WorkHero";
import { featuredSlides } from "@/data";

export default function WorkDetails() {
  return (
    <>
      <WorkHero
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        title="Client"
        highlightedWord="Name"
        subtitle="Three decades of unforgettable events, exceptional experiences, and lasting impressions"
      />
      <EventDetailsSection images={featuredSlides} />
    </>
  );
}
