import {
  Box,
  Divider,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

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

const PrivacyPolicyPage = () => {
  return (
    <Box my={4} py={2}>
      <Grid container justifyContent="center">
        <Grid size={10.5}>
          <Typography variant="h6" fontWeight={600} mb={1}>
            Privacy Policy
          </Typography>
          <Typography variant="body1" fontWeight={600} mb={1}>
            Effective Date:{" "}
            <Typography variant="body1" component="span">
              22-December-2022
            </Typography>
          </Typography>
          <Typography variant="body1" fontWeight={300} mb={1}>
            <b>groMind Academy </b> is committed to protecting your privacy and
            ensuring a safe online experience for all users. This Privacy Policy
            outlines how we collect, use, store, and disclose your personal data
            when you use our e-learning platform. By accessing our services, you
            agree to the practices described in this Privacy Policy.
          </Typography>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              1. Information We Collect
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              To provide you with an enhanced learning experience, we collect
              different types of personal information, including:
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Personal Identifiable Information (PII):
                </Typography>
                When you register on our platform, you may provide us with
                personal information such as your name, email address, phone
                number, billing information, and other details relevant to your
                account and course enrollment.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Sensitive Personal Data:
                </Typography>
                We may collect sensitive personal information such as payment
                details and account credentials to process transactions
                securely. We take extra measures to protect this data.
              </CustomListItem>
              <CustomListItem>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Third-Party Data:
                </Typography>
                If you enroll through a partner organization or use third-party
                authentication services, we may collect information shared with
                us through these third parties.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              The information we collect is used for various purposes,
              including:
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  To Provide Our Services:
                </Typography>
                To process your registrations, provide access to courses, issue
                certificates, and facilitate payment processing.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  To Improve Our Services:
                </Typography>
                To enhance and personalize your learning experience by analyzing
                usage patterns and offering tailored recommendations.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  To Communicate with You:
                </Typography>
                We may send you important updates about your account, course
                progress, and any relevant promotions or new features (you may
                opt-out of marketing communications at any time).
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  For Customer Support:
                </Typography>
                To assist you with any inquiries, technical support, or
                account-related issues.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  To Comply with Legal Obligations:
                </Typography>
                To meet any regulatory or legal requirements as applicable in
                India or internationally.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              3. Sharing of Your Information
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              We do not sell, rent, or trade your personal data. However, we may
              share your information in the following circumstances:
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Service Providers:
                </Typography>
                We may share your personal information with trusted third-party
                vendors who help with platform operations, customer support,
                payment processing, and analytics. These service providers are
                contractually obligated to safeguard your information and only
                use it as necessary to provide services.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Legal Compliance:
                </Typography>
                We may disclose your information if required by law, including
                compliance with requests from government agencies, regulatory
                authorities, or as necessary to protect our legal rights or
                property.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Business Transactions:
                </Typography>
                In case of a merger, acquisition, or transfer of ownership, your
                personal data may be transferred as part of the transaction.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              4. Data Security
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              We implement reasonable physical, electronic, and administrative
              safeguards to protect the personal data we collect. These measures
              include encryption, firewalls, and secure data storage. While we
              take appropriate steps to safeguard your personal information, no
              system is completely secure, and we cannot guarantee complete
              protection from breaches or unauthorized access.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              5. Your Rights Regarding Personal Data
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={2}>
              As a user, you have certain rights in relation to your personal
              data, including:
            </Typography>
            <CustomList component="ul">
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Access & Rectification:
                </Typography>
                You can access, update, or correct your personal data by logging
                into your account or by contacting us.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Data Deletion:
                </Typography>
                You may request the deletion of your personal data, subject to
                our legal obligations to retain certain information.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Opt-Out of Marketing Communications:
                </Typography>
                You can opt-out of receiving promotional emails or notifications
                by clicking the unsubscribe link in emails or by contacting us
                directly.
              </CustomListItem>
              <CustomListItem sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="span"
                  pr={1}
                >
                  Cookies:
                </Typography>
                Our website uses cookies to enhance user experience. You may
                disable cookies through your browser settings, although this may
                affect your ability to use some features of our platform.
              </CustomListItem>
            </CustomList>
          </Box>
          <Divider variant="fullWidth" my={2} />{" "}
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              6. Third-Party Links
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              Our platform may contain links to third-party websites or
              services. We are not responsible for the privacy practices or
              content of such external sites. We encourage you to read their
              privacy policies before sharing any personal information.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              7. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              We may update this Privacy Policy from time to time. Any changes
              will be communicated through an updated privacy policy on our
              website. Please review this policy periodically to stay informed
              about how we are protecting your data.
            </Typography>
          </Box>
          <Divider variant="fullWidth" my={2} />
          <Box my={2}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              8. Contact Us
            </Typography>
            <Typography variant="body1" fontWeight={300} mb={1}>
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicyPage;
