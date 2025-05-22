import Timeline from "./Timeline";
import CustomTypography from "./CustomTypography";
import CustomButton from "./CustomButton";
import SectionContainer from "./SectionContainer";

function HowItWorks() {
  const timelineItems = [
    {
      number: "01",
      title: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      number: "02",
      title: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      number: "03",
      title: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];

  return (
    <SectionContainer
      sx={{
        alignItems: { sm: "center", md: "flex-start", lg: "flex-start" },
      }}
    >
      <CustomTypography
        variant="h5"
        color="gray"
        isTitle
        sx={{
          mb: 3,
          textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
        }}
      >
        How it works
      </CustomTypography>
      <Timeline items={timelineItems} />
      <CustomButton
        sx={{
          mt: 8,
          backgroundColor: "DarkCyan",
        }}
      >
        Create your plan
      </CustomButton>
    </SectionContainer>
  );
}

export default HowItWorks;
