import { Box, Divider, Stack, Tooltip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <Box my={4} py={2}>
      <Grid container justifyContent="center">
        <Grid size={9.6}>
          <Stack
            textAlign="left"
            direction="row"
            justifyContent="space-between"
          >
            <Typography variant="h6" fontWeight={600} mb={1}>
              Why Upskilling and Reskilling are crucial for the professionals in
              the VUCA World
            </Typography>
            <Tooltip title="Chat on WhatsApp" placement="left-start" arrow>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Link
                  href="https://wa.me/919266464133/?text=Hello%20groMind%20Academy"
                  aria-label="Chat on WhatsApp"
                  alignSelf={{ xs: "end", md: "center" }}
                  sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}
                >
                  <WhatsAppIcon
                    sx={{ fontSize: 30, fill: "var(--main-green-color)" }}
                  />
                </Link>
              </motion.div>
            </Tooltip>
          </Stack>
          <Typography variant="body1" fontWeight={300} mb={2}>
            In the rapidly evolving job market, especially in India’s IT sector,
            the need for <b>upskilling</b> and <b>reskilling</b> has never been
            more critical. With the <b>VUCA</b> (Volatile, Uncertain, Complex,
            and Ambiguous) world becoming the new norm, professionals and
            organizations are under immense pressure to adapt, innovate, and
            stay competitive. The advent of <b>new technologies</b> such as{" "}
            <b>Gen AI, data analytics, and cloud computing</b> has radically
            transformed how businesses function. To remain relevant, employees,
            especially in the IT sector, must continuously update their skill
            set.
          </Typography>
          <Divider variant="fullWidth" mt={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              1. Faced-Paced Technological Change
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              The pace of technological evolution in the Indian IT industry is
              faster than ever, leaving those without <b>future-ready skills</b>{" "}
              at risk of becoming obsolete. New tools and frameworks such as
              <b>Power BI, Python, Machine Learning</b> and{" "}
              <b>Cloud Computing</b> are now in demand more than ever.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              For instance, <b>Power BI</b> has emerged as a leading tool in the
              world of <b>business intelligence</b> and{" "}
              <b>data visualization</b>. With its ability to help businesses
              make data-driven decisions, Power BI has become a critical skill
              for professionals in IT, marketing, and data analysis roles.
              Similarly, Python is dominating the world of programming due to
              its simplicity and widespread use in areas like
              <b>data science</b>, <b>AI</b>, and <b>automation</b>.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              As technologies like{" "}
              <b>AI, Machine learning and Data analytics</b>
              disrupt traditional job roles, the professionals who embrace these
              technologies through <b>upskilling</b> are positioning themselves
              for greater success. Those who resist change and fail to learn new
              technologies are at risk of falling behind in an increasingly
              competitive market.
            </Typography>
          </Box>
          <Divider variant="fullWidth" mt={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              2. The Need for Reskilling in the Face of Automation
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              Automation and AI are rapidly replacing repetitive, manual tasks.
              In India’s IT industry, automation tools and platforms are being
              implemented to optimize business operations.{" "}
              <b>Robotic Process Automation</b>, for example, is streamlining
              administrative processes, while AI-based tools are taking over
              roles traditionally done by humans in areas like coding, testing,
              and customer support.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              To avoid job displacement, IT professionals must invest in
              <b>reskilling</b>—learning new technologies that enhance their
              ability to create and manage automated systems. For instance,
              while traditional programming skills in <b>Java or C++</b> remain
              important, learning <b>Python, RPA tools</b>, and gaining
              proficiency in cloud platforms such as <b>AWS</b> or{" "}
              <b> Microsoft Azure</b> are becoming increasingly important.
              Python, in particular, is crucial for professionals wanting to
              enter fields like <b>data analysis</b>, <b>AI</b>, and{" "}
              <b> machine learning</b>, all of which are shaping the future of
              tech jobs.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              Professionals who stay ahead of the curve by reskilling into areas
              that are less likely to be automated, such as AI programming,{" "}
              <b>data visualization</b> (using tools like Power BI), and cloud
              computing, will secure their career growth and remain invaluable
              to their organizations.
            </Typography>
          </Box>
          <Divider variant="fullWidth" mt={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              3. Staying Competitive in the Global IT Market
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              India is one of the leading exporters of IT services globally, and
              while the sector’s growth is immense, so is the competition.
              Outsourcing, though still a significant contributor to India's IT
              economy, is now being challenged by local talent pools from
              developed countries and by low-cost automation solutions.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              To maintain India’s <b>competitive edge</b> in the global IT
              market, professionals must evolve their skill sets continuously.
              If they want to remain relevant not only in India but also on the
              global stage, they must gain proficiency in{" "}
              <b>cutting-edge technologies</b>. Skills in{" "}
              <b>Power BI, Python, cloud computing</b>, and <b>AI</b> can make
              Indian IT professionals highly competitive when vying for global
              roles or international projects.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              Global companies are increasingly focusing on{" "}
              <b>data-driven decisions</b> and <b> digital transformation</b>,
              where tools like Power BI for visualization and Python for
              automation and analysis are indispensable. Upskilling in these
              areas ensures that Indian IT professionals are able to meet global
              expectations for technical expertise and innovation.
            </Typography>
          </Box>
          <Divider variant="fullWidth" mt={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              4. Agility in the Face of Change
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              The VUCA world demands that companies and employees remain agile
              and responsive to ever-changing conditions. In this unpredictable
              environment, <b>upskilling</b> and <b>reskilling</b> are not just
              important—they are a survival strategy. Organizations that invest
              in <b>continuous learning</b> create a workforce capable of
              navigating uncertainty and seizing new opportunities.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              Professionals who are proactive about learning new technologies
              like <b>Power BI, Python, cloud platforms</b>, and{" "}
              <b>cybersecurity</b>
              will be well-positioned to pivot as industries evolve. In India,
              where IT is one of the largest and most dynamic sectors, building
              this agility is essential for career longevity and growth.
            </Typography>
          </Box>
          <Divider variant="fullWidth" mt={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              5. Improving Career Growth and Job Security
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              In a country like India, where the IT industry provides millions
              of jobs, remaining competitive is the key to job security. The
              traditional IT roles are being redefined, and those who don’t keep
              up with the <b>new demands</b> will face challenges in career
              progression.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              Upskilling in technologies like <b>Power BI</b> for data
              visualization, <b>Python</b> for automation and AI, and cloud
              platforms like <b>AWS</b> or <b>Azure</b> ensures that employees
              remain relevant. Additionally, it opens up opportunities for
              leadership roles in <b>data science, AI, cloud architecture</b>,
              and <b>business intelligence</b>, all of which are growth areas in
              India’s IT ecosystem.
            </Typography>
          </Box>
          <Divider variant="fullWidth" mt={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Conclusion: A Pathway to a Future-Ready IT Workforce
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              India’s IT industry is at a crossroads. With the rise of
              <b>
                {" "}
                automation, AI, machine learning, and data-driven
                decision-making
              </b>
              , the need for <b>upskilling</b> and <b>reskilling</b> has never
              been more urgent. Professionals who invest in emerging
              technologies will remain competitive, not just within India but
              globally.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              In a VUCA world where the only constant is change,{" "}
              <b>continuous learning</b> is the key to securing a fulfilling and
              sustainable career.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              To thrive in this environment, IT professionals in India must
              evolve their skill sets to embrace new technologies. Upskilling
              and reskilling are not optional—they are essential for long-term
              career success and organizational growth.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogsPage;
