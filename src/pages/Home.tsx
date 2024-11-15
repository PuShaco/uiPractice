import Container from "@/components/common/container/Container";
import GetDaysCard from "@/components/home/GetDaysCard";
import GetHourlyCard from "@/components/home/GetHourlyCard";
import GetKakaoMap from "@/components/home/GetKaKaoMap";
import GetTodayCard from "@/components/home/GetTodayCard";
import GetTodayHighlightsCard from "@/components/home/GetTodayHighlightsCard";

export default function HomePage() {
  
  return (
    <>
      <Container>
        <GetTodayCard />
        <GetHourlyCard />
        <GetKakaoMap />
      </Container>

      <Container>
        <GetTodayHighlightsCard />
        <GetDaysCard />
      </Container>
    </>
  );
}
