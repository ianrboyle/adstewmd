import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "./treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../constants/enums";
import Link from "next/link";
export default function AboutUs() {
  return (
    <Box
      sx={{
        mt: { xs: "5rem", sm: "7rem", md: "7rem", lg: "9rem", xl: "7rem" },
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "35vh",
          overflow: "hidden",
        }}
      >
        <Image
          alt="about us"
          src="/about-us.png"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center 50%",
          }}
        />
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid
          size={{ md: 12, lg: 8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { lg: "100%", xl: "90%" },
              p: { xs: 2, sm: 2, md: 4, xl: 0 },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: "500",
                  color: "text.secondary",
                  mb: "1rem",
                }}
              >
                About Us
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery and Dermatology of Cherry Creek is a cutting-edge aesthetic dermatology practice in
                Denver, Colorado, founded by board-certified dermatologist Adrienne Stewart, MD, and medical
                aesthetician Willa Roberts. They use state-of-the-art modalities and technologies during conservative
                applications. <strong>Dr. Stewart performs all of the injections herself in her office.</strong>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Dr. Stewart has more than 25 years of experience completing injections and has taught cosmetic
                dermatology injection techniques at the University of Colorado in Denver for years.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery and Dermatology of Cherry Creek provides revolutionary Allergan, Revance, and Evolus
                products. The practice offers cosmetic consultations to determine patient goals and develop a treatment
                plan, cosmetic injectables, including <Link href="/services/injectables/botox">Botox®</Link>, Dysport®,{" "}
                <Link style={{ color: "text.secondary" }} href="/services/injectables/jeuveau">
                  Jeuveau®
                </Link>
                , <Link href="/services/injectables/daxxify">Daxxify™</Link>, Juvéderm®,{" "}
                <Link href="/services/injectables/voluma">Voluma®</Link>,{" "}
                <Link href="/services/injectables/volux">Volux®</Link>,{" "}
                <Link href="/services/injectables/restylane">Restylane®</Link>,{" "}
                <Link href="/services/injectables/rha">RHA®</Link>,{" "}
                <Link href="/services/injectables/sculptra">Sculptra®</Link>, and numerous other{" "}
                <Link href="/services/injectables/dermal-fillers">dermal fillers</Link>.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Additional treatment options include <Link href="/services/body">body sculpting</Link>, including
                procedures such as <Link href="/services/body/coolsculpting">CoolSculpting® Elite</Link>,{" "}
                <Link href="/services/body/emsculpt">EmSculpt Neo®</Link>, and{" "}
                <Link href="/services/body/vanquish">Vanquish®</Link>, often used in combination to increase overall
                results and outcome.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery and Dermatology of Cherry Creek provides{" "}
                <Link href="/services/body/cutera-laser-vein-treatment">Cutera laser vein treatments</Link>,{" "}
                <Link href="/services/face/fraxel">Fraxel skin resurfacing</Link>,{" "}
                <Link href="/services/face/facials">facials</Link>,{" "}
                <Link href="/services/face/microneedling">microneedling</Link>,{" "}
                <Link href="/services/laser-hair-removal">laser hair removal</Link>, and{" "}
                <Link href="/services/face/chemical-peels">chemical peels</Link> to help patients look and feel younger
                without excessive downtime.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                The Aesthetic Surgery and Dermatology of Cherry Creek specialists provide outstanding dermatology care,
                exceeding their patients’ expectations while addressing skin care needs. Highly trained providers treat
                wrinkles, skin cancer, pre-cancers, and unwanted facial or body hair, as well as acne, brown spots,
                scarring, visible veins, rashes, warts, and other skin conditions.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Dr. Stewart tailors each treatment to patients’ unique needs, treatment preferences, and beauty goals.
                The result is resurfaced, tighter, younger-looking skin with a healthy glow.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery and Dermatology of Cherry Creek provides personalized skin maintenance programs and
                advanced medical-grade products. The dermatology experts offer effective, safe, affordable solutions for
                all skin care concerns.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                Aesthetic Surgery and Dermatology of Cherry Creek helps patients to look younger, gaining the confidence
                they desire and deserve. Highly trained providers compassionately welcome new and existing patients to
                the practice.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  whiteSpace: "normal",
                  overflow: "hidden",
                  mb: "1rem",
                }}
              >
                To schedule an appointment at Aesthetic Surgery and Dermatology of Cherry Creek, call the office today
                to set an appointment.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mr: "-1px", display: { xs: "none", lg: "block" } }}
        />
        <Grid
          size={{ md: 12, lg: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FeaturedServicesImageColumn currentPage={PageType.genericPage} />
        </Grid>
      </Grid>
    </Box>
  );
}
