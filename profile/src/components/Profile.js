import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkIcon from "@mui/icons-material/Link";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import CodeIcon from "@mui/icons-material/Code";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Chip from "@mui/material/Chip";
import CV from "../profile_data/Tiankai_Xie_CV.pdf";

export default function Profile() {
  const intro = (
    <Grid container spacing={3}>
      <Grid item xs={0} md={4}>
        <Box sx={{ width: "100%", display: "flex", justifyItems: "end" }}></Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box p={2} sx={{ textAlign: "left" }}>
          <Typography variant="h4">Tiankai Xie</Typography>
          <Typography color="text.secondary" sx={{ fontSize: 18 }} gutterBottom>
            Graduate Research Associate
          </Typography>{" "}
          <Chip
            label="Explainable AI"
            size="small"
            color="secondary"
            variant="outlined"
          />{" "}
          <Chip label="HCI" size="small" color="primary" variant="outlined" />{" "}
          <Chip
            label="Visual Analytics"
            size="small"
            color="success"
            variant="outlined"
          />
          <br />
          <br />
          <Typography color="text.secondary" variant="body1">
            I am currently a Ph.D. candidate in computer science at{" "}
            <a href="https://www.asu.edu/"> Arizona State University</a>. My
            research is to increase the transparency and interpretability of
            machine learning models by designing and developing interactive
            visual analytics systems that can facilitate users to explore and
            discover potential vulnerabilities of those models in terms of
            adversarial machine learning, graph mining sensitivity, as well as
            algorithmic fairness.
          </Typography>
          <br />
          <Typography color="text.secondary" variant="body1">
            At Arizona State University I work with Dr.{" "}
            <a href="http://rmaciejewski.faculty.asu.edu/">Ross Maciejewski</a>{" "}
            as a member of the
            <a href="http://vader.lab.asu.edu/"> VADER lab</a>. My research is
            supported by the U.S. Department of Homeland Security and the{" "}
            <a href="https://beta.nsf.gov/funding/opportunities/nsf-program-fairness-artificial-intelligence-collaboration-amazon">
              National Science Foundation Program on Fairness in AI in
              collaboration with Amazon
            </a>
            .
          </Typography>
        </Box>
        <Box p={2} sx={{ textAlign: "left" }}>
          <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
            <Grid item xs={4} md={2.5}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <SchoolIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao">
                    Google Scholar
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <GitHubIcon sx={{ color: "#7b1fa2" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/tiankaixie">@tiankaixie</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <TwitterIcon sx={{ color: "#42a5f5" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://twitter.com/tiankaixie">@tiankaixie</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <LinkedInIcon sx={{ color: "#1565c0" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://www.linkedin.com/in/tiankaixie/">LinkedIn</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} md={2}>
              <Box display="flex" sx={{ flexDirection: "row" }}>
                <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                  <DescriptionIcon sx={{ color: "#c62828" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href={CV}>CV.pdf</a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider variant="middle" />
      </Grid>
    </Grid>
  );

  const education = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Education </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={2} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">August 2018 - Present</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>Ph.D. in Computer Science </Box>
            </Typography>

            <Typography gutterBottom>
              Arizona State University, Tempe, AZ
            </Typography>

            <Typography variant="body2">
              <Box display="inline" color="text.secondary">
                Advisor:
              </Box>{" "}
              Ross Maciejewski
            </Typography>
            <Typography variant="body2">
              <Box display="inline" color="text.secondary">
                Dissertation:
              </Box>{" "}
              Explaining Vulnerabilities in Machine Learning through Visual
              Analytics
            </Typography>
            <Typography variant="body2">
              <Box display="inline" color="text.secondary">
                Committee:
              </Box>{" "}
              Ross Maciejewski, Huan Liu, Chris Bryan, and Hanghang Tong
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={2} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">August 2015 - May 2017</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>M.S. in Computer Science</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Steven Institute of Technology, Hoboken, NJ
            </Typography>
            <Typography variant="body2">
              <Box display="inline" color="text.secondary">
                GPA: 3.77/4.0
              </Box>{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={2} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">
              September 2011 - July 2015
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>B.S. in Computer Science</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Beijing Forestry University, Beijing, China
            </Typography>
          </Box>
          {/* <Divider variant="middle" /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const experience = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Experience </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={2} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">August 2018 - Present</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
                Graduate Research Associate{" "}
              </Box>
            </Typography>

            <Typography gutterBottom>
              VADER Lab, Arizona State University, Tempe, AZ
            </Typography>

            <Typography variant="body2" gutterBottom>
              {" "}
              <Box display="inline" color="text.secondary">
                Advisor:
              </Box>{" "}
              Ross Maciejewski
            </Typography>
            <Typography color="text.secondary" variant="body2" gutterBottom>
              Work as a research assistant for the VADER Lab with the research
              topics in Explainable AI and Visual Analytics. Current
              dissertation topic is 'Explaining the vulnerabilities of machine
              learning models through visual analytics'. Passed dissertation
              prospectus in Fall 2021.
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Box
                display="flex"
                sx={{ flexDirection: "row", justifyContent: "center" }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon />
                </Box>
                <Typography variant="body2">
                  <a href="https://vader.lab.asu.edu/">VADER Lab</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={2} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">May 2021 - August 2021</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>Data Science Intern</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Epsilon Data Management, LLC., Chicago, IL
            </Typography>
            <Typography variant="body2" gutterBottom>
              {" "}
              <Box display="inline" color="text.secondary">
                Mentor:
              </Box>{" "}
              Chihua Ma
            </Typography>
            <Typography color="text.secondary" variant="body2" gutterBottom>
              Designed and implemented the algorithm to extract highlights from
              the aggregated audience data across 2500+ companies. Designed,
              implemented and integrated the Intelligent Audience Profile (IAP)
              visualization view driven by the designed highlighting algorithm
              into the DiME visual analytics platform.
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Box
                display="flex"
                sx={{ flexDirection: "row", justifyContent: "center" }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon />
                </Box>
                <Typography variant="body2">
                  <a href="https://www.epsilon.com/us/products-and-services/epsilon-peoplecloud/digital-media-solutions">
                    Epsilon & DiME
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Box p={2} textAlign={{ xs: "left", md: "right" }}>
            <Typography variant="caption">July 2017 - May 2018</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>Co-founder</Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              RobotGyms, Inc., San Mateo, CA
            </Typography>
            <Typography color="text.secondary" variant="body2">
              Designed, implemented Robotgyms's infrastructure and curriculum.
              and maintained the company's teaching devices, including local
              network and devices' software and hardware installation and
              upgrade. Developed policies and training plans for online resource
              administration and usage. Give lectures for 40+ students and took
              charge of customer consultation, and conducted SEO and SMO for
              branding programs as well as the company.
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Box
                display="flex"
                sx={{ flexDirection: "row", justifyContent: "center" }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon />
                </Box>
                <Typography variant="body2">
                  <a href="https://robotgyms.com/">RobotGyms</a>
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* <Divider variant="middle" /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const publications = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Publications </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
                FairRankVis: A Visual Analytics Framework for Exploring
                Algorithmic Fairness in Graph Mining Models{" "}
              </Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              Tiankai Xie, Yuxin Ma, Jian Kang, Hanghang Tong, and Ross
              Maciejewski
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                IEEE Transactions on Visualization and Computer Graphics, 2021
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <DescriptionIcon sx={{ color: "#c62828" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="#">PDF</a>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <YouTubeIcon sx={{ color: "#3c3c3c" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://youtu.be/WVJ3-UXNxPk">Video</a>
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <SlideshowIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="#">Talk</a>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <CodeIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/VADERASU/fairrankvis">
                    Source Code
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
                Auditing the Sensitivity of Graph-based Ranking with Visual
                Analytics{" "}
              </Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              Tiankai Xie, Yuxin Ma, Hanghang Tong, My T. Thai, and Ross
              Maciejewski
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                IEEE Transactions on Visualization and Computer Graphics, 2020
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <DescriptionIcon sx={{ color: "#c62828" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="http://vader.lab.asu.edu/docs/publications/pdf/2021/graph-sensitivity.pdf">
                    PDF
                  </a>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <YouTubeIcon sx={{ color: "#3c3c3c" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://www.youtube.com/watch?v=_ifuWHgUyCg">
                    Video
                  </a>
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <SlideshowIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://youtu.be/BtxxhKdO6Ms?t=2285">Talk</a>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <CodeIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/VADERASU/auditing-sensitivity-graph-ranking">
                    Source Code
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box sx={{ fontWeight: "bold" }}>
                Explaining Vulnerabilities to Adversarial Machine Learning
                through Visual Analytics{" "}
              </Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              Yuxin Ma, Tiankai Xie, Jundong Li, and Ross Maciejewski
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                IEEE Transactions on Visualization and Computer Graphics, 2019
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <DescriptionIcon sx={{ color: "#c62828" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="http://vader.lab.asu.edu/docs/publications/pdf/2019/adva.pdf">
                    PDF
                  </a>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <YouTubeIcon sx={{ color: "#3c3c3c" }} fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://www.youtube.com/watch?v=eMyhe7WcOXc">
                    Video
                  </a>
                </Typography>
              </Box>

              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <SlideshowIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://vimeo.com/369214358">Talk</a>
                </Typography>
              </Box>
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <CodeIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://github.com/VADERASU/visual-analytics-adversarial-attacks">
                    Source Code
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const reference = (
    <React.Fragment>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box
            sx={{ width: "100%", display: "flex", justifyItems: "end" }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="h4">Reference </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box display="inline" sx={{ fontWeight: "bold" }}>
                Dr. Ross Maciejewski{" "}
              </Box>
              <Box display="inline">, Professor</Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              The School of Computing and Augmented Intelligence (SCAI)
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                Arizona State University
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="http://rmaciejewski.faculty.asu.edu/">Homepage</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box display="inline" sx={{ fontWeight: "bold" }}>
                Dr. Huan Liu{" "}
              </Box>
              <Box display="inline">, Professor</Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              The School of Computing and Augmented Intelligence (SCAI)
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                Arizona State University
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="http://www.public.asu.edu/~huanliu/">Homepage</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box display="inline" sx={{ fontWeight: "bold" }}>
                Dr. Chris Bryan{" "}
              </Box>
              <Box display="inline">, Assistant Professor</Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              The School of Computing and Augmented Intelligence (SCAI)
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                Arizona State University
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="https://chrisbryan.github.io/">Homepage</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
        <Grid item xs={0} md={4}>
          <Box p={2} sx={{ textAlign: "right" }}></Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box p={2} sx={{ textAlign: "left" }}>
            <Typography variant="body1">
              <Box display="inline" sx={{ fontWeight: "bold" }}>
                Dr. Hanghang Tong{" "}
              </Box>
              <Box display="inline">, Associate Professor</Box>
            </Typography>

            <Typography color="text.secondary" variant="body2" gutterBottom>
              Department of Computer Science
            </Typography>
            <Typography gutterBottom>
              <Box display="inline" sx={{ fontStyle: "oblique" }}>
                University of Illinois at Urbana-Champaign
              </Box>
            </Typography>
            <Box
              display="flex"
              sx={{ flexDirection: "row", justifyContent: "start" }}
            >
              <Box
                display="flex"
                sx={{
                  paddingRight: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ paddingRight: 1 }}>
                  <LinkIcon fontSize="small" />
                </Box>
                <Typography variant="body2">
                  <a href="http://tonghanghang.org/">Homepage</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
    </React.Fragment>
  );
  return (
    <React.Fragment>
      {intro}
      {education}
      {experience}
      {publications}
      {reference}
    </React.Fragment>
  );
}
