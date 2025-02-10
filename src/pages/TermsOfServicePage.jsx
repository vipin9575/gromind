import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

const CustomListItem = styled(ListItem)({
  display: "list-item",
  fontWeight: 300,
  padding: 0,
});

const CustomList = styled(List)({
  marginLeft: "24px",
  listStyleType: "disc",
  paddingLeft: "16px",
});


const TermsOfServicePage = () => {
  return (
    <Box my={4} py={2}>
      <Grid container justifyContent="center">
        <Grid size={10.5}>
          <Typography variant="h6" fontWeight={600} mb={1}>
            Terms of Service
          </Typography>
          <Typography variant="body1" fontWeight={600} mb={1}>
            Effective Date:{" "}
            <Typography variant="body1" component="span">
              22-December-2022
            </Typography>
          </Typography>
          <Typography variant="body1" fontWeight={300} mb={1}>
            Welcome to <b>groMind Academy</b>, an innovative e-learning platform
            providing online courses and educational services. These{" "}
            <b>Terms of Service {""}</b>
            govern your access to and use of our website, platform, and
            associated services. By accessing, using, or enrolling in our
            services, you agree to comply with and be bound by these Terms. If
            you do not agree with any part of these Terms, please refrain from
            using the Platform.
          </Typography>
          <Typography variant="body1" fontWeight={300} mb={2}>
            Please read these Terms carefully before using our services. They
            form a legal agreement between you and groMind Academy.
          </Typography>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              By registering, enrolling in courses, accessing, or using any part
              of our Platform, you accept and agree to be bound by these Terms.
              If you are registering on behalf of an organization, you represent
              and warrant that you have the authority to bind that organization
              to these Terms.
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              If you do not agree to these Terms, you must immediately stop
              using the Platform and services.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              2. User Eligibility
            </Typography>
            <Typography variant="body1" fontWeight={300}>
              To use our services, you must:
            </Typography>
            <CustomList component="ul">
              <CustomListItem>
                Be at least 18 years old or have the legal capacity to enter
                into binding contracts under applicable law.
              </CustomListItem>
              <CustomListItem>
                If you are under 18, you must have parental or guardian consent
                to use the Platform.
              </CustomListItem>
              <CustomListItem>
                Provide accurate, current, and complete information during the
                registration process and keep it updated.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              3. Account Registration and Security
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Account Creation:
                </Typography>
                To access certain features or enroll in courses, you must create
                an account by providing valid personal information. You are
                responsible for ensuring that your account information is
                accurate and up-to-date.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Security:
                </Typography>
                You agree to keep your login credentials (username, password,
                etc.) confidential and secure. You are solely responsible for
                all activities that occur under your account, including any
                unauthorized access or use.
              </CustomListItem>
              <CustomListItem>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Account Termination:
                </Typography>
                We reserve the right to suspend or terminate your account at any
                time if you violate these Terms or engage in any activities that
                may harm the Platform, its users, or its reputation.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              4. Services and Content
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Educational Services:
                </Typography>
                We offer online courses, webinars, training sessions, and other
                learning resources to help users acquire new skills and
                knowledge. that your account information is accurate and
                up-to-date.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Intellectual Propert:
                </Typography>
                All content and materials provided on the Platform, including
                but not limited to videos, articles, assignments, quizzes,
                software, and trademarks, are the intellectual property of
                groMind Academy or its licensors. You are granted a limited,
                non-exclusive, non-transferable license to access and use the
                content for personal, non-commercial educational purposes only.
              </CustomListItem>
              <CustomListItem sx={{ mb: 1 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  User-Generated Content:
                </Typography>
                If you upload or submit any content (e.g., forum posts,
                comments, assignments) to the Platform, you grant groMind
                Academy a non-exclusive, royalty-free, perpetual, and
                transferable license to use, modify, and display the content as
                part of the services provided on the Platform.
              </CustomListItem>
            </CustomList>
            <Typography variant="body1" fontWeight={300}>
              You agree not to upload or share any content that is infringing,
              defamatory, obscene, or otherwise violates the rights of any third
              party.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              5. Payment and Subscription
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Course Fees:
                </Typography>
                Certain courses and services on the Platform require payment.
                The fees for each course will be displayed at the time of
                enrollment. All prices are inclusive of applicable taxes unless
                otherwise stated.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Payment Methods:
                </Typography>
                We accept payments through various methods, including credit
                cards, debit cards, net banking, and other online payment
                systems via third-party payment gateways.
              </CustomListItem>
              <CustomListItem sx={{ mb: 1 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Refund Policy:
                </Typography>
                Refunds, if applicable, are subject to our Refund Policy. You
                can find specific details about refunds including eligibility by
                contacting us directly.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              6. User Obligations and Prohibited Activities
            </Typography>
            <Typography variant="body1" fontWeight={300}>
              As a user, you agree to:
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Lawful Use:
                </Typography>
                Use the Platform and services only for lawful purposes and in
                accordance with applicable laws and regulations.ces are
                inclusive of applicable taxes unless otherwise stated.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Respect for Intellectual Property:
                </Typography>
                Do not reproduce, distribute, modify, or exploit any content on
                the Platform without prior written consent from groMind Academy
                or the content owner.
              </CustomListItem>
              <CustomListItem sx={{ mb: 1 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Prohibited Conduct:
                </Typography>
                You shall not engage in any of the following activities:
                <CustomList component="ul" sx={{ listStyleType: "circle" }}>
                  <CustomListItem>
                    Unauthorized access to other users' accounts or the
                    Platform's infrastructure.
                  </CustomListItem>
                  <CustomListItem>
                    Use of bots, spiders, or other automated tools to collect or
                    scrape data from the Platform.
                  </CustomListItem>
                  <CustomListItem>
                    Engaging in fraudulent or malicious activities that could
                    harm our services, users, or reputation.
                  </CustomListItem>
                </CustomList>
              </CustomListItem>
              <CustomListItem>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Account Responsibility:
                </Typography>
                You are responsible for maintaining the confidentiality of your
                account and for all activities conducted under your account.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              7. Privacy and Data Protection
            </Typography>
            <Typography variant="body1" fontWeight={300}>
              We are committed to protecting your privacy. By using our
              Platform, you agree to our <b>Privacy Policy</b>, which explains
              how we collect, use, and protect your personal information. Our
              practices comply with Indian data protection laws, including the{" "}
              <b>
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011.
              </b>
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              8. Third-Party Links and Integrations
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              Our Platform may contain links to third-party websites or services
              that are not owned or controlled by groMind Academy. We do not
              endorse, control, or assume responsibility for the content,
              privacy practices, or terms of use of any third-party sites.
            </Typography>
            <Typography variant="body1" fontWeight={300}>
              We are not responsible for any transactions or interactions you
              have with third parties. Use of such third-party services is at
              your own risk.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              9. Disclaimers and Limitation of Liability
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  No Warranty:
                </Typography>
                The Platform and services are provided on an "as-is" and
                "as-available" basis without any warranty or representation of
                any kind, express or implied. We make no representations
                regarding the accuracy, reliability, or completeness of the
                content provided.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Limitation of Liability:
                </Typography>
                To the fullest extent permitted by law, groMind Academy and its
                affiliates will not be liable for any indirect, incidental,
                consequential, or punitive damages arising from your use of the
                Platform, even if we have been advised of the possibility of
                such damages.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              10. Indemnity
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              You agree to indemnify, defend, and hold harmless groMind Academy,
              its officers, directors, employees, agents, and affiliates from
              any claims, losses, liabilities, damages, or expenses (including
              legal fees) arising out of your violation of these Terms, misuse
              of the Platform, or infringement of any third-party rights.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              11. Termination
            </Typography>
            <Typography variant="body1" fontWeight={300}>
              We reserve the right to suspend or terminate your access to the
              Platform, without prior notice or liability, for any reason,
              including but not limited to:
            </Typography>
            <CustomList component="ul">
              <CustomListItem>Violation of these Terms.</CustomListItem>
              <CustomListItem>
                Engaging in fraudulent or illegal activities.
              </CustomListItem>
              <CustomListItem>
                Disrupting the Platform’s functionality or operations.
              </CustomListItem>
            </CustomList>
            <Typography variant="body1" fontWeight={300}>
              Upon termination, your right to use the Platform will cease
              immediately, and any outstanding payments owed to us will remain
              due.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              12. Amendments to Terms
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              groMind Academy reserves the right to update or modify these Terms
              at any time. We will notify you of any significant changes by
              posting the revised Terms on our Platform, and the "Effective
              Date" at the top of this document will be updated accordingly.
              Continued use of the Platform after any such changes constitutes
              your acceptance of the modified Terms.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              13. Governing Law and Dispute Resolution
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              These Terms shall be governed by and construed in accordance with
              the laws of <b>India</b>. Any dispute arising from these Terms or
              your use of the Platform shall be subject to the exclusive
              jurisdiction of the courts in <b>Noida</b>, India.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              14. Contact Us
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              If you have any questions, concerns, or suggestions regarding
              these Terms, please contact us at:
            </Typography>
            <Box display="flex" flexDirection="column" gap={0.5}>
              <Typography variant="h6" fontWeight={600}>
                groMind Academy
              </Typography>
              <Typography variant="body6">
                Email:{" "}
                <Link href="mailto:hr@gromindacademy.com" underline="hover">
                  hr@gromindacademy.com
                </Link>
              </Typography>
              <Typography variant="body6">
                Phone:{" "}
                <Link
                  href="tel:+919266464133"
                  color="inherit"
                  underline="hover"
                >
                  +91-9266 464 133
                </Link>
              </Typography>
              <Typography variant="body6">
                Address: The Iconic Corenthum, Sector 62, Noida
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TermsOfServicePage;
