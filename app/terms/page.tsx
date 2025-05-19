import LinkDocs from "@/components/docs/link-docs";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
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

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>

                <p className="text-lg mb-4">
                  Welcome to SavePass, a password manager application developed
                  in Flutter and available under an open-source MIT license.
                </p>

                <p className="text-lg mb-4">
                  Thank you for choosing us. Before starting, please read these
                  General Terms of Service (“General Terms”) carefully. Among
                  other things, the General Terms cover the scope of your use of
                  and access to SavePass.
                </p>

                <p className="text-lg mb-4">
                  For the purpose of the Terms, "SavePass", “we”, “us”, or “our”
                  means SavePass, the password management application, and “you”
                  or “your” means the user of SavePass.
                </p>

                <p className="text-lg mb-4">
                  For information about how we collect and process your personal
                  data, please read our{" "}
                  <LinkDocs text="Privacy Policy" url="/policy" />
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">Service</h2>

                <p className="text-lg mb-4">
                  SavePass is a password manager designed to protect your
                  sensitive information with the highest level of security.
                  Built on a zero-knowledge architecture, SavePass ensures that
                  only you have access to your credentials—neither we nor anyone
                  else can view your encrypted data. With SavePass Services, you
                  can effortlessly auto-save all your passwords and card details
                  in a fully encrypted format, making it technically impossible
                  for us to access their plain values. Your security and privacy
                  are our top priorities.
                </p>

                <p className="text-lg mb-4">
                  The SavePass software is available for free download on all
                  supported platforms. To access SavePass Services, you simply
                  need to create an account. We offer a fully functional Free
                  Version that allows you to securely manage your passwords and
                  sensitive information without any cost.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">
                  Agreement with SavePass
                </h2>

                <p className="text-lg mb-4">
                  Please note that the Terms constitute a binding legal
                  agreement between you or those you legally represent (“you”)
                  and SavePass. You agree and accept to be bound by these Terms
                  by either: (i) creating a user account and/or other accounts
                  to use Services (“Account”); (ii) downloading the Mobile App
                  or accessing/using its Services; or (iii) otherwise
                  electronically agreeing to be bound by these Terms. If you are
                  using the Services on behalf of an organization, you are
                  agreeing to these Terms for that organization and
                  acknowledging that you have the authority to act on behalf of
                  that organization and commit to these Terms on behalf of that
                  organization.
                </p>

                <p className="text-lg mb-4">
                  OUR SERVICES ARE OFFERED TO YOU CONDITIONAL ON YOUR ACCEPTANCE
                  OF THESE TERMS. PLEASE READ CAREFULLY ALL OF THEM. IF YOU DO
                  NOT AGREE TO BE BOUND BY THESE TERMS OR ANY PROVISIONS HEREOF,
                  PLEASE DO NOT ACCESS AND USE OUR SERVICES.
                </p>

                <p className="text-lg mb-4">
                  Our services are free of charge. We do not charge you for
                  using our services. However, we reserve the right to change
                  our pricing policy in the future. If we do so, we will notify
                  you in advance and give you the opportunity to cancel your
                  account if you do not agree with the new pricing policy.
                </p>

                <p className="text-lg mb-4">
                  You affirm that you are eighteen (18) or more years of age or
                  have the authority to act on behalf of a valid legal entity,
                  and you are fully able and have all rights and power to enter
                  into the terms, conditions, obligations, affirmations,
                  representations, and warranties set forth in these Terms, and
                  to abide by and comply with them.
                </p>

                <p className="text-lg mb-4">
                  You represent and warrant that throughout the duration of
                  these Terms, you have (and will maintain) all necessary
                  rights, permissions, consents, and clearances for your content
                  to be uploaded, stored, accessed, and managed within SavePass
                  Services. Additionally, you confirm that the collection,
                  storage, and handling of your content through SavePass will
                  not infringe any applicable laws or the rights of third
                  parties. SavePass does not own, control, verify, endorse, or
                  assume any liability for your content and cannot be held
                  responsible for its use or distribution.
                </p>

                <p className="text-lg mb-4">
                  SavePass Services must not be used for any criminal, unlawful,
                  illicit, or fraudulent activities. You agree to comply with
                  all applicable laws and regulations relevant to your
                  jurisdiction, your actions, and your use of SavePass Services.
                  It is your sole responsibility to understand and adhere to any
                  legal obligations associated with your content and its
                  management within SavePass. As a reminder, your access and use
                  of SavePass Services are also subject to our General Terms,
                  including its guidelines on Prohibited and Restricted Use.
                </p>

                <p className="text-lg mb-4">
                  THE TERMS MAY CHANGE, SO IT IS IMPORTANT TO REVIEW THE TERMS
                  PERIODICALLY.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">Account</h2>

                <p className="text-lg mb-4">
                  To access and use any of our Services, you must set up an
                  Account by providing certain information (e.g., your email
                  profile picture, password). All information you provide must
                  be complete, accurate, true to the fact and kept up to date.
                </p>

                <p className="text-lg mb-4">
                  You agree to accept responsibility and are solely responsible
                  for any and all usage and activities that occur under your
                  Account or password, including, but not limited to, use of the
                  Account by any other person, whether or not authorized by you.
                  You are responsible for maintaining the confidentiality of
                  your Account and its password, and for restricting access to
                  your Account by any other party. To protect your Account, keep
                  your password confidential.
                </p>

                <h3 className="text-xl font-bold mb-4">Profile photo</h3>

                <p className="text-lg mb-4">
                  Also, you have a right to upload your photo to the profile of
                  your SavePass Account. By uploading the photo, you are fully
                  and solely responsible, liable for it, and guarantee that you
                  have all required permissions.
                </p>

                <ul className="list-disc text-md space-y-2 mb-6 pl-10">
                  <li>
                    Impersonate any person or entity or post any photo of
                    another person without his/her permission.
                  </li>
                  <li>
                    Upload any photo that (i) is hate speech, threatening,
                    sexually explicit, or pornographic; (ii) incites violence or
                    contains nudity or graphic or gratuitous violence; and/or
                    (iii) promotes racism, bigotry, hatred, or physical harm of
                    any kind against any group or individual.
                  </li>
                </ul>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">Master Password</h2>

                <p className="text-lg mb-4">
                  SAVEPASS DOES NOT STORE OR HAVE ACCESS TO YOUR MASTER
                  PASSWORD, WHICH IS THE KEY TO YOUR ENCRYPTED DATA. YOU ARE
                  SOLELY RESPONSIBLE FOR KEEPING YOUR MASTER PASSWORD SAFE AND
                  SECURE. IF YOU LOSE YOUR MASTER PASSWORD, YOU WILL NOT BE ABLE
                  TO ACCESS YOUR SAVEPASS ACCOUNT OR ANY OF YOUR SAVEPASS DATA.
                </p>

                <p className="text-lg mb-4">
                  Master Password. You hereby understand that upon using the
                  SavePass application, you will be required to create a Master
                  Password. The Master Password will be used by you and only
                  you. SavePass has no knowledge of your Master Password and
                  will not ask or be permitted to ask for your Master Password.
                </p>

                <p className="text-lg mb-4">
                  Confidentiality: You agree to keep your Master Password
                  confidential and not to disclose it to any third party. You
                  are solely responsible for maintaining the confidentiality of
                  your Master Password and for all activities that occur under
                  your Account. You agree to notify us immediately of any
                  unauthorized use of your Account or any other breach of
                  security.
                </p>

                <p className="text-lg mb-4">
                  No Recovery: You acknowledge and agree that SavePass does not
                  have access to your Master Password and cannot recover it for
                  you. If you forget your Master Password, you will not be able
                  to access your Account or any of your data. SavePass is not
                  responsible for any loss or damage resulting from your failure
                  to keep your Master Password secure.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">License Terms</h2>

                <p className="text-lg mb-4">
                  Apple Requirements. For the sake of clarity, in respect to the
                  Software that is downloaded from Apple, Inc. (“Apple”) App
                  Store, the License is limited to the use of such Software on
                  any Apple-branded devices that you own or control and as
                  permitted by the Usage Rules set forth in the Apple Media
                  Services Terms and Conditions, except that such Software may
                  be accessed and used by other accounts associated with you via
                  family sharing or volume purchasing features.
                </p>

                <p className="text-lg mb-4">
                  The license of SavePass is open source and is available under
                  the{" "}
                  <LinkDocs
                    text="MIT license"
                    url="https://opensource.org/licenses/MIT"
                  />
                </p>

                <p className="text-lg mb-4">
                  You agree that you shall not yourself and/or enable others to:
                </p>

                <ul className="list-disc text-md space-y-2 mb-6 pl-10">
                  <li>
                    use, assist, encourage, or enable others to use the Services
                    for any unlawful, illicit, illegal, criminal, or fraudulent
                    activities, including but not limited to port scanning,
                    sending spam, sending opt-in email, scanning for open relays
                    or open proxies, sending unsolicited email or any version or
                    type of email sent in vast quantities even if the email is
                    routed through third-party servers, any pop-up launching,
                    use of stolen credit cards, credit card fraud, financial
                    fraud, cryptocurrency fraud, cloaking, extortion, blackmail,
                    kidnapping, rape, murder, sale of stolen credit cards, sale
                    of stolen goods, offer or sale of prohibited and dual-use
                    goods, offer or sale of controlled substances, identity
                    theft, hacking, pharming, phishing, web crawling, scraping
                    in any form or scale, digital piracy, conduct distributed
                    denial-of-service (DDoS) attacks, harvesting, or other
                    similar activities that otherwise generate large amounts of
                    automated requests over the internet while using the
                    Services, which might negatively affect provision of our
                    Services to other users;
                  </li>
                  <li>
                    use the Services for any military purpose, including cyber
                    warfare, weapons development, design, manufacture, or
                    production of missiles, nuclear, chemical or biological
                    weapons;
                  </li>
                  <li>
                    assault, interfere, gain unauthorized access, deny service
                    in any way or form to any other network, computer, or node
                    through our Services/Websites;
                  </li>
                  <li>
                    exploit children in any way, including audio, video,
                    photography, digital content, etc.;
                  </li>
                  <li>
                    violate, infringe, or misappropriate SavePass, our licensors
                    and/or any other third parties' copyright, other
                    intellectual property rights, privacy, or other legal
                    rights;
                  </li>
                  <li>
                    communicate, transmit, store, make available, share anything
                    that is illegal, abusive, harassing, or otherwise
                    objectionable (objectionable means anything which interferes
                    with the rights of SavePass, its users, or other third
                    parties, or causes conditions that are dangerous, hazardous,
                    and detrimental to others, or anything that most users
                    and/or SavePass would find to be offensive or
                    inappropriate);
                  </li>
                  <li>
                    transmit any viruses or other computer codes, files,
                    programs, instructions, or technological means that disrupt,
                    damage, or interfere with the use of computers or related
                    systems;
                  </li>
                  <li>
                    interfere with or disrupt the integrity or performance of
                    the Services;
                  </li>
                  <li>
                    take any action that imposes or may impose an unreasonable
                    or disproportionately large load on our infrastructure;
                  </li>
                  <li>
                    use any robot, spider, scraper, or other automated means to
                    access our Services for any purpose, or otherwise exceed
                    reasonable use limits without our prior written permission;
                  </li>
                  <li>
                    threaten, stalk, harm, or harass others, or promote bigotry
                    or discrimination;
                  </li>
                  <li>
                    attempt to gain unauthorized access to the Services,
                    Accounts, computer systems, or networks connected to the
                    Services through hacking, password mining, brute force, or
                    any other means;
                  </li>
                  <li>
                    violate general ethical or moral norms, good customs, and
                    fair conduct norms;
                  </li>
                  <li>
                    use the Services for anything other than lawful purposes;
                  </li>
                  <li>
                    access and use the Services if you have been or are
                    prohibited to access the Services, or if your Account has
                    been suspended or terminated due to any reason;
                  </li>
                  <li>
                    share non-public features or content of the Software and/or
                    Services with any third party;
                  </li>
                  <li>
                    to the extent permitted under applicable law, otherwise
                    violate or attempt to evade, or circumvent these Terms.
                  </li>
                </ul>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">
                  Disclaimer of Warranties
                </h2>

                <p className="text-lg mb-4">
                  Reasonable efforts are taken to improve the accuracy and
                  integrity of the Services, but complex software is never
                  wholly free from defects, errors, and bugs. We give no
                  warranty or representation that the Services will be wholly
                  free from defects, errors, and bugs, such as downtime, loss of
                  data, corrupt data, service delay, mistakes, out-of-date
                  information, or other. Notwithstanding any other provision of
                  the Terms, we reserve the right to modify, suspend, or
                  terminate access to the Services, or any functionality
                  comprising a part of the Services at any time. In no event, to
                  the extent permitted under applicable law, will we be liable
                  for making these changes. In exceptional and very limited
                  cases, our Services may be unavailable from time to time due
                  to human, digital, mechanical, telecommunication, software,
                  and other failures. We cannot predict or control when such
                  downtime may occur and cannot control the duration of such
                  downtime.
                </p>

                <p className="text-lg mb-4">
                  THE SERVICES ARE PROVIDED “AS IS” AND WITH ALL FAULTS. WE MAKE
                  NO REPRESENTATION OR WARRANTY WHATSOEVER REGARDING THE
                  COMPLETENESS, ACCURACY, ADEQUACY, SUITABILITY, FUNCTIONALITY,
                  AVAILABILITY, OR OPERATION OF THE SERVICES. YOU ACKNOWLEDGE
                  THAT WE DO NOT HAVE CONTROL OVER YOUR USE OF THE SERVICES, AND
                  WE DO NOT WARRANT THE PERFORMANCE OR RESULTS THAT MAY BE
                  OBTAINED THROUGH YOUR USE OF THE SERVICES. YOU ASSUME ALL
                  RISKS AND RESPONSIBILITY FOR YOUR USE OF THE SERVICES AND FOR
                  ANY LOSS OF OR ERRORS IN ANY DATA OR INFORMATION. TO THE FULL
                  EXTENT PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                  FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND ANY
                  WARRANTIES ARISING THROUGH COURSE OF DEALING, COURSE OF
                  PERFORMANCE, OR USAGE OF TRADE. WITHOUT LIMITING THE
                  FOREGOING, WE NEITHER WARRANT NOR REPRESENT THAT YOUR USE OF
                  THE SERVICES WILL NOT INFRINGE THE RIGHTS OF ANY THIRD
                  PARTIES, NOR THAT THE SERVICES WILL BE AVAILABLE FOR YOUR
                  ACCESS OR USE, NOR THAT OPERATION OF THE SERVICES WILL BE
                  ERROR-FREE OR UNINTERRUPTED. PLEASE NOTE THAT SOME
                  JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED
                  WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO
                  YOU. IN ADDITION, YOU MAY ALSO HAVE OTHER RIGHTS THAT VARY
                  FROM ONE JURISDICTION TO ANOTHER JURISDICTION.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">
                  Limitation of Responsabilities
                </h2>

                <p className="text-lg mb-4">
                  At SavePass, we implement state-of-the-art security measures
                  to protect the SavePass Services, including your passwords,
                  secure notes, and other items stored in your SavePass vault
                  (collectively, "Secured Data"). However, while we strive to
                  provide the highest level of protection, we cannot guarantee
                  that your Secured Data will be 100% safe, as no technology is
                  entirely immune to threats. Passwords generated by SavePass
                  are designed with strong encryption to maximize security;
                  however, we cannot assure their absolute invulnerability to
                  attacks or unauthorized access by third parties.
                </p>

                <p className="text-lg mb-4">
                  There are inherent risks in relying upon, using, transmitting,
                  or retrieving any data and/or content on the internet, and we
                  urge you to make sure you understand these risks before using
                  the Services. SavePass disclaims all responsibility for the
                  behavior of its users and/or visitors when they access or use
                  the Services.
                </p>

                <p className="text-lg mb-4">
                  YOUR USE OF THE SERVICES AND WEBSITES IS AT YOUR OWN RISK.
                  NEITHER SAVEPASS, NOR ANY OF ITS PERSONAL SHALL BE LIABLE FOR
                  ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR OTHER DAMAGES (INCLUDING, WITHOUT
                  LIMITATION, LOSS OF DATA OR INFORMATION OF ANY KIND, LOSS OF
                  BUSINESS, LOST PROFITS, INTERRUPTION OF BUSINESS, COST OF
                  COVER OR ANY OTHER DAMAGES) ARISING OUT OF OR IN ANY WAY
                  RELATED TO THESE TERMS OR THE USE OR INABILITY TO USE THE
                  SERVICES, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY OR
                  OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                  SUCH DAMAGES.
                </p>

                <p className="text-lg mb-4">
                  Please also note, that SavePass has implemented security
                  measures aimed at securing the Services; nevertheless, the
                  internet is not a secure network and system reliability could
                  be impaired independently of Savepass's efforts and will. In
                  addition, SavePass cannot be held liable for unpredictable
                  events such as cyber attacks, security breaches regarding the
                  transmission of data or for performance guarantees regarding
                  the volume and speed of data transmissions. Users are
                  responsible for taking all appropriate measures to protect
                  their own data, software, equipment, and systems, particularly
                  from contamination by any viruses circulating on the internet.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">
                  Suspension and Termination
                </h2>

                <p className="text-lg mb-4">
                  We may suspend (for clarification, investigation, or when
                  requesting you to explain your actions) or terminate your
                  Account and/or Services, if we believe that you have violated
                  these Terms, or if we believe that your actions may cause us
                  to incur liability, harm our reputation, or cause us to lose
                  (in whole or in part) the services of our ISPs or other
                  suppliers. We may also suspend or terminate your Account
                  and/or Services if we are required to do so by law, or if we
                  believe that you are using the Services in a manner that
                  violates applicable laws or regulations.
                </p>

                <p className="text-lg mb-4">
                  If the situation warrants, we will give you a reasonable
                  opportunity to fix the issue before suspending or terminating
                  your Account and/or Services. However, if your Account has
                  been suspended, you must contact us for further information.
                </p>

                <p className="text-lg mb-4">
                  Usually, we will send you a prior notice before suspending or
                  terminating your Account and/or Services.
                </p>

                <p className="text-lg mb-4">
                  Termination by You: You may cancel the Services at any time.
                  On how to terminate (delete) your Account, please read our{" "}
                  <LinkDocs text="Privacy Policy" url="/policy" />. If you
                  decide to delete your SavePass Account, you will lose all of
                  the Secured Data that you have stored inside the SavePass
                  vault.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">
                  Application Platform Terms
                </h2>

                <p className="text-lg mb-4">
                  App Store. If you downloaded our Software from Apple App Store
                  or if you are using such Software and our Services on any
                  Apple-branded device, you acknowledge that you have read,
                  understood, and agree to the following notice regarding Apple:
                </p>

                <p className="text-lg mb-4">
                  These Terms are concluded between you and Savepass not with
                  Apple, and Apple is not responsible for the Services and the
                  content thereof. If you need any support with respect to our
                  Services, please contact us, not Apple as they are under no
                  obligation whatsoever to furnish any maintenance or support
                  services with respect to our Services.
                </p>

                <p className="text-lg mb-4">
                  Apple is not responsible for addressing any claims by you or
                  any third party relating to the Service or your possession
                  and/or use of the Service, including: (i) product liability
                  claims; (ii) any claim that the Service fails to conform to
                  any applicable legal or regulatory requirement; and (iii)
                  claims arising under consumer protection or similar
                  legislation. Apple is not responsible for the investigation,
                  defense, settlement, and discharge of any third-party claim
                  that the Service and/or your possession and use of the
                  application infringe that third party's intellectual property
                  rights.
                </p>

                <p className="text-lg mb-4">
                  You agree to comply with any applicable third-party terms,
                  when using the Service.{" "}
                </p>

                <p className="text-lg mb-4">
                  Apple, and Apple's subsidiaries, are third party beneficiaries
                  of these Terms, and upon your acceptance of these Terms, Apple
                  will have the right (and will be deemed to have accepted the
                  right) to enforce these Terms against you as a third party
                  beneficiary of these Terms. You hereby represent and warrant
                  that (i) you are not located in a country that is subject to a
                  U.S. Government embargo, or that has been designated by the
                  U.S. Government as a “terrorist supporting” country; and (ii)
                  you are not listed on any U.S. Government list of prohibited
                  or restricted parties.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">Miscellaneous</h2>

                <p className="text-lg mb-4">
                  Availability of Services: Actual coverage, speeds, locations,
                  and quality of Services may vary. SavePass attempts to improve
                  and provide Services at all times. However, our Services may
                  be not available without a prior notice or SavePass's
                  liability, including when (i) we test, update, expand, add, or
                  remove our Services, features, functionalities, including
                  those required to reflect changes in relevant laws and
                  regulatory requirements (ii) we experience temporary
                  interruptions due to technical difficulties, maintenance or
                  human errors; (iii) events beyond our control (e.g., events in
                  nature and other force majeure events) happens.
                </p>

                <p className="text-lg mb-4">
                  Modification and Termination of Services: We reserve the right
                  to modify or update the operation of the Services at our sole
                  discretion, at any time, for any reason, and without notice or
                  liability. We may also suspend the Services entirely, in which
                  event we will notify you in advance unless extenuating
                  circumstances, such as safety or security concerns, prevent us
                  from doing so. SavePass has no liability to you, nor any
                  obligation to provide a refund to you, in connection with
                  internet or other service outages or failures that are caused
                  by the actions of the authorities, other third parties, or
                  events beyond our control.
                </p>

                <p className="text-lg mb-4">
                  Third-Party Components: Where our Websites contain links to
                  other websites and/or resources provided by third parties,
                  which include third-party social media websites such as Google
                  and Github, they are provided for your information only.
                  Please review the third-party website's terms of use and other
                  policies carefully and make sure you understand them before
                  you engage in any transaction.
                </p>

                <p className="text-lg mb-4">
                  Internet Connection: Certain Services may require an active
                  and stable connection to the internet in order to function. It
                  is therefore your responsibility to ensure that you have at
                  all times an active and stable internet connection.
                </p>

                <p className="text-lg mb-4">
                  Prevailing Language: For all purposes, the English language
                  version of the Terms shall be the original, governing
                  instrument and understanding between you and us. In the event
                  of any conflict between this English language version of the
                  Terms and any subsequent translation into any other language,
                  the English language version shall govern and control.
                </p>
              </div>

              <div className="py-6 text-justify">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

                <p className="text-lg mb-4">
                  If you have questions regarding the Terms, please contact us
                  at app.savepass@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
