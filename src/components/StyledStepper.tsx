import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Shipping", "Billing", "Review & place order"];
type StyledStepperProps = {
  activePage: number;
};

// right: calc(17% + 20px);
// left: calc(-90% + 20px);

export default function StyledStepper(props: StyledStepperProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.activePage} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              display: "flex",
              justifyContent: !index
                ? "start"
                : index === steps.length - 1
                ? "end"
                : "center",
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
