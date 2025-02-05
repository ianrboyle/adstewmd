import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import FeaturedServicesImageColumn from "../../components/treatments-and-services/individual-page-components/ImageColumn";
import { PageType } from "../../constants/enums";

export default function TermsOfUsePage() {
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
          // height: { xs: "125px", sm: "175px", md: "200px", lg: "35vh" },
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
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  fontWeight: "300",
                  color: "black",
                  mb: "1rem",
                }}
              >
                Terms of Use
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
                1. This World Wide Web site with its home page in the domain 'https://www.adriennestewartmd.com',
                hereinafter referred to as the Website, is an information service provided by Aesthetic Surgery &
                Dermatology of Cherry Creek at no charge to users of the World Wide Web, with the express condition that
                these users agree to be bound by the terms and conditions set forth in this Terms of Use Agreement.
                Aesthetic Surgery & Dermatology of Cherry Creek reserves the right to change these terms and conditions
                at any time, and you agree to abide by the most recent version of this Terms of Use Agreement each time
                you view and use the Website. You are accordingly advised to consult the Terms of Use Agreement each
                time you view and use the Website. Do not use the Website if you do not agree to all of the following
                terms and conditions.
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
                2. You acknowledge that the information on the Website is provided 'as is' for general information only.
                It is not intended to provide medical advice, and should not be relied upon as a substitute for
                consultations with qualified health professionals who are familiar with your individual medical needs.
                Aesthetic Surgery & Dermatology of Cherry Creek makes no warranties of any kind regarding this Website,
                including but not limited to any warranty of accuracy, completeness, currency, reliability,
                merchantability or fitness for a particular purpose, or any warranty that these pages, or the computer
                server which makes them available, are free of viruses or other harmful elements, and such warranties
                are expressly disclaimed.
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
                3. You agree that you will hold harmless Aesthetic Surgery & Dermatology of Cherry Creek and its
                shareholders, officers, directors, and employees from all claims arising out of or related to your
                access or use of, or your inability to access or use, this Website or the information contained in this
                Website or other websites to which it is linked, including but not limited to claims that you have found
                something you have heard, viewed or downloaded from this Website or any other website to which it is
                linked to be obscene, offensive, defamatory, or infringing upon your intellectual property rights. In no
                event will Aesthetic Surgery & Dermatology of Cherry Creek or any of the information contributors to the
                Website be liable to you or anyone else for any decision made or action taken by you in reliance on such
                information or for any consequential, special or similar damages, even if Aesthetic Surgery &
                Dermatology of Cherry Creek has been advised of the possibility of such damages.
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
                4. You acknowledge that the opinions and recommendations contained in this Website are not necessarily
                those of Aesthetic Surgery & Dermatology of Cherry Creek nor are they endorsed by Advice Media.
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
                5. Aesthetic Surgery & Dermatology of Cherry Creek may provide links on the Website to other websites
                which are not under the control of Aesthetic Surgery & Dermatology of Cherry Creek. In general, any
                website which has an address (or URL) not containing 'https://www.adriennestewartmd.com' is such a
                website. These links are provided for convenience or reference only and are not intended as an
                endorsement by Aesthetic Surgery & Dermatology of Cherry Creek of the organization or individual
                operating the website or a warranty of any type regarding the website or the information on the website.
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
                6. You may provide hypertext links to this Website on another website, provided that: (a) the link be a
                text-only link clearly marked 'Advice Media Site', (b) the link must 'point' to the URL
                'https://www.adriennestewartmd.com' and not to other pages within the Website, (c) the appearance,
                position and other aspects of the link may not be such as to damage or dilute the goodwill associated
                with Aesthetic Surgery & Dermatology of Cherry Creek's name and trademarks, (d) the appearance, position
                and other aspects of the link may not create the false appearance that an entity other than Aesthetic
                Surgery & Dermatology of Cherry Creek is associated with or sponsored by Aesthetic Surgery & Dermatology
                of Cherry Creek, (e) the link, when activated by a user, must display this Website full-screen and not
                within a 'frame' on the linked website, and (f) Aesthetic Surgery & Dermatology of Cherry Creek reserves
                the right to revoke its consent to any link at any time at its sole discretion by amending this Terms of
                Use Agreement. You agree that any other hypertext links to this Website must be approved in writing by
                Aesthetic Surgery & Dermatology of Cherry Creek.
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
                7. The works of authorship contained in this Website, including but not limited to all design, text and
                images, are owned or licensed by Aesthetic Surgery & Dermatology of Cherry Creek and Advice Media,
                hereinafter referred to as Advice Media, or its suppliers and contributors, and may not be copied,
                reproduced, transmitted, displayed, performed, distributed, rented, sublicensed, altered, stored by
                subsequent use or otherwise used in whole or in part in any manner without Aesthetic Surgery &
                Dermatology of Cherry Creek's prior written consent, except that the user may make such temporary copies
                in a single computer's RAM and hard drive as is necessary to browse the Website, and that the user may
                produce one permanent printout of each page of the Website (unmodified in form, with a copy of this
                Terms of Use Agreement attached) to be used by the user for personal and non-commercial uses which do
                not harm the reputation of Aesthetic Surgery & Dermatology of Cherry Creek or Advice Media
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
                8. This Website (excluding linked sites) is controlled by Advice Media which is headquartered in the
                State of New York, in the United States of America. It may be accessed from all 50 states, as well as
                from other countries around the world. Because each of these places has laws that may differ from those
                of New York, by accessing this Website you agree that the statutes and laws of the State of New York,
                without regard to conflicts of law principles thereof, will apply to all matters arising from or
                relating to the use of this Website. You also agree and hereby submit to the exclusive legal
                jurisdiction and venues of the Courts of Nassau County, New York and the United States District Court
                for the Southern District of New York with respect to such matters. Aesthetic Surgery & Dermatology of
                Cherry Creek and Advice Media. make no representation that materials on the Website are appropriate or
                available for use in other locations, and accessing them from territories where their contents are
                illegal is hereby prohibited. Individuals or organizations choosing to access this Website from other
                locations do so of their own initiative and are responsible for compliance with local laws.
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
                8. This Website (excluding linked sites) is controlled by Advice Media which is headquartered in the
                State of New York, in the United States of America. It may be accessed from all 50 states, as well as
                from other countries around the world. Because each of these places has laws that may differ from those
                of New York, by accessing this Website you agree that the statutes and laws of the State of New York,
                without regard to conflicts of law principles thereof, will apply to all matters arising from or
                relating to the use of this Website. You also agree and hereby submit to the exclusive legal
                jurisdiction and venues of the Courts of Nassau County, New York and the United States District Court
                for the Southern District of New York with respect to such matters. Aesthetic Surgery & Dermatology of
                Cherry Creek and Advice Media. make no representation that materials on the Website are appropriate or
                available for use in other locations, and accessing them from territories where their contents are
                illegal is hereby prohibited. Individuals or organizations choosing to access this Website from other
                locations do so of their own initiative and are responsible for compliance with local laws.
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
                9. All text and electronic images on this Website are copyrighted materials which are either registered
                copyrights, unregistered common law copyrights, registered trademarks or salesmarks of Aesthetic Surgery
                & Dermatology of Cherry Creek or Advice Media, its suppliers or contributors. Any attempt to infringe
                upon or to circumvent these copyrights or trademarks will subject the infringing individual or
                organization to severe criminal and civil penalties as prescribed by law.
              </Typography>

              {/* <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "300",
                color: "text.secondary",
              }}
            >
              Contacting Us
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
              If you wish to report a problem, have any questions or need assistance, please click here to contact
              Aesthetic Surgery & Dermatology of Cherry Creek Customer Support.
            </Typography> */}
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
