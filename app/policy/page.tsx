import LinkDocs from "@/components/docs/link-docs";

export default function PolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="py-6 text-justify">
              <p className="text-md mb-2 text-gray-400">
                Last update: May 17, 2025
              </p>
              <p className="text-lg mt-10 mb-2">
                This page describes our policies and procedures regarding the
                personal data and other information collected when you use
                SavePass. The data manager of your personal data is SavePass
                ("SavePass", "we", "us", or "our").
              </p>

              <p className="text-lg mb-2">
                Many definitions of this policy are described here or in the{" "}
                {"  "}
                <LinkDocs text="Terms of Use" url="/terms" />
              </p>

              <p className="text-lg mb-2">
                By using SavePass, submitting your personal data, accessing,
                installing or using SavePass, you confirm that you have read
                this Privacy Policy and agree to be bound by it. If you do not
                agree with this Privacy Policy or any of its provisions, we
                strongly urge you not to use SavePass.
              </p>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">General Remarks</h2>

              <p className="text-lg mb-2">
                SavePass is designed with a zero-knowledge architecture, which
                ensures that we have no technical ability to access your
                passwords or cards. This means that only you know the contents
                of your vault. Zero-knowledge architecture allows you to prove
                possession of information without actually revealing it. With
                this approach, SavePass only verifies that you have the key
                without ever storing the key itself, providing strong protection
                for your data. Your passwords and credit card details remain
                completely private—no one else can see them. Moreover, we do not
                keep a record of your Master Password, guaranteeing that your
                encrypted information stays protected even if our servers were
                ever compromised.
              </p>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">
                Collecting and Processing your Personal Data
              </h2>

              <p className="text-lg mb-2">
                SavePass needs some of your personal data such as your email
                address to provide our services. In call cases, we don't track
                your online activity and we only store the bare minimum of
                information needed to work on SavePass. We process personal data
                to a limited scope to provide services and enable the
                functionality of our mobile application. The following
                categories of personal data are processed:
              </p>

              <div className="my-6 pl-6">
                <h3 className="text-xl font-bold mb-2">Account</h3>
                <ul className="list-disc text-md space-y-2 mb-6 pl-10">
                  <li>
                    <strong>Email address:</strong> We ask for your email
                    address to create an account and use the features of
                    SavePass.
                  </li>
                  <li>
                    <strong>Social Networks Data:</strong> An account can be
                    created using a social network (e.g., Google, Github). In
                    this case, we may collect and process your personal data
                    (e.g., full name, picture).
                  </li>
                </ul>
              </div>
              <div className="my-6 pl-6">
                <h3 className="text-xl font-bold mb-2">
                  Information collected on our mobile application
                </h3>
                <ul className="list-disc text-md space-y-2 mb-6 pl-10">
                  <li>
                    <strong>Access logs:</strong>As part of our security
                    measures, we collect access logs (e.g., IP address, device
                    type, operating system) to monitor and fix
                    issues/bugs/errors. This information is stored for a limited
                    time and is not used for any other purpose.
                  </li>
                  <li>
                    <strong>Diagnostics:</strong> This data helps us to identify
                    problems related to our app performance and updates. The
                    collected information includes crash error reports.
                  </li>
                  <li>
                    <strong>Device information:</strong> We collect information
                    about the device you use to access our services, including
                    the type of device, operating system, device id and version.
                    This information is used to ensure compatibility and improve
                    our services.
                  </li>
                </ul>
              </div>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">
                Reasons to Process your Personal Data
              </h2>

              <p className="text-lg mb-2">
                We mainly process your personal data to provide access to our
                services and ensure the secure, reliable and robust performance
                of our services and websites.
              </p>

              <p className="text-lg mb-2">
                Sometimes, we may process your personal data for other purposes,
                including:
              </p>

              <ul className="list-disc text-md space-y-2 mb-6 pl-10">
                <li>
                  To provide customer support and respond to your inquiries.
                </li>
                <li>To improve our services and develop new features.</li>
              </ul>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">
                Sharing your personal data
              </h2>

              <p className="text-lg mb-2">
                At SavePass, we prioritize your privacy. We do not share your
                personal data with third-party providers or any external
                entities. Your information remains strictly confidential and
                fully encrypted, accessible only by you.
              </p>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">
                Ways to manage your personal data
              </h2>

              <p className="text-lg mb-2">
                You can manage your personal data in the following ways:
              </p>

              <ul className="list-disc text-md space-y-2 mb-6 pl-10">
                <li>
                  Access and update your information: You can access and update
                  your personal data at any time through your account settings.
                </li>
                <li>
                  Delete your account: If you wish to delete your account, you
                  can do so through the app settings. Please note that this
                  action is irreversible, and all your data will be permanently
                  deleted.
                </li>
              </ul>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>

              <p className="text-lg mb-2">
                We take the security of your personal data seriously. We
                implement appropriate technical and organizational measures to
                protect your data from unauthorized access, loss, or misuse.
                However, please note that no method of transmission over the
                internet or electronic storage is 100% secure, and we cannot
                guarantee its absolute security.
              </p>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>

              <p className="text-lg mb-2">
                We only keep your personal data for as long as we need it to
                provide our services. Once there are no legitimate grounds for
                holding this information, we'll immediately dispose of it in a
                secure way.
              </p>
            </div>

            <div className="py-6 text-justify">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <p className="text-lg mb-2">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at
                <strong>app.savepass@gmail.com</strong>
              </p>

              <p className="text-lg mb-2">
                Summary: We maintain tight controls over the personal data we
                collect. We do not sell, rent, or lease your personal data to
                third parties. We do not share your personal data with third
                parties for their own marketing purposes. We do not use your
                personal data for any purpose other than those described in this
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
