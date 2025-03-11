
import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="glass-card p-6 md:p-8 space-y-6 text-white/80">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Introduction</h2>
              <p className="mb-4">
                POWER Sniper ("Company", "us" or "we") respects your privacy and is committed to protecting it through our compliance with this privacy policy. 
                This policy describes the types of information we may collect from you or that you may provide when you use our sniper bot 
                (the "bot"), and on our website (the "Website" and together with the bot, the "Services", and each, referred to herein as a "Service"), 
                any mobile applications to which this policy is posted, when you create an account with us to use the Services, if such functionality 
                is available, and our data collection and handling practices.
              </p>
              <p>
                This privacy policy is part of the Terms of Use applicable to the use of our Services. Please review this policy together with 
                the Terms of Use, to understand all of your rights and obligations, and how we operate our Services. If you do not agree with 
                the terms of this privacy policy, do not access or use the Services, or any other aspect of our business.
              </p>
            </section>
            
            <section>
              <p className="mb-4">This privacy policy applies to information we collect:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>On the Services;</li>
                <li>In email, text, and other electronic messages between you and the Services;</li>
                <li>Through mobile and desktop applications, if any, that you download from the Services, if this policy is posted to them;</li>
                <li>When you interact with our advertising and applications on third-party websites and services, if such advertising or applications include links to this policy; and</li>
                <li>Through any other means associated with or relating to the Services.</li>
              </ul>
              
              <p className="mb-4">This policy does not apply to information collected by:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Us offline or through any other means, including on any other website operated by Company or any third party (including our affiliates and subsidiaries); or</li>
                <li>Any third party, including through any application or content (including advertising) that may link to or be accessible from or on the Services.</li>
              </ul>
              
              <p>
                Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. 
                If you do not agree with our policies and practices, your choice is not to use our Services. By accessing or using our Services, 
                you agree to the terms of this privacy policy.
              </p>
            </section>
            
            <section>
              <p>
                This privacy policy may change from time to time. Your continued use of the Services after we make changes is deemed to be 
                acceptance of those changes, so please check the privacy policy periodically for updates.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Children under the Age of Sixteen (16)</h2>
              <p className="mb-4">
                Our Services are not intended for children under eighteen (18) years of age. No one under age eighteen (18) may provide any 
                personal information to us or on or through the Services.
              </p>
              <p className="mb-4">
                We do not knowingly collect personal information from children under the age of sixteen (16). If you are under sixteen (16), 
                do not use or provide any information on the Services or on or through any of their features or register on the Services 
                (if such feature is available), make any purchases through the Services (if such feature is available), use any of the 
                interactive or public comment features of the Services (if such feature is available) or provide any information about 
                yourself to us, including your name, address, telephone number, email address, or any screen name or user name you may use.
              </p>
              <p>
                If we learn we have collected or received personal information from a child under sixteen (16) years of age, we will delete 
                that information. If you believe we might have any information from or about a child under the age of sixteen (16), 
                please contact us at privacy@powersnipe.app.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Information We May Collect About You and How We Collect It</h2>
              <p className="mb-4">
                We may collect several types of information from and about users of our Services (some of which is considered "personal information" 
                pursuant to applicable law), including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Identifiers, such as any information that the Services collect, which applicable law may consider personally identifiable, personal information, personal data, and other such designations;</li>
                <li>Information about your cryptocurrency wallet IDs, keys, and other wallet information, transaction history, trading data and associated fees paid;</li>
                <li>Information about the transactions you make on or through services made available on the Services, such as the type of transaction, transaction amount, transaction signatures, and timestamp;</li>
                <li>Information about the device you use to access the Services;</li>
                <li>Your IP address, Identifier for Advertisers ("IDFA"), Android/Google Advertising ID, International Mobile Equipment Identity ("IMEI"), or another unique identifier;</li>
                <li>Your device characteristics and functionality (including information about your operating system, hardware, mobile network, browser, browser language, etc.);</li>
                <li>Referring and exit web pages and URLs;</li>
                <li>Your browsing history, including the areas within our Services that you visit and your activities there, including remembering you and your preferences;</li>
                <li>Your device location or other geolocation information;</li>
                <li>Certain other device data, including the time of day you visit our Services; and</li>
                <li>Information about your internet connection and internet provider.</li>
              </ul>
              
              <p className="mb-4">We may collect this information:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Directly from you when you provide it to us, such as when filling in forms on the Services (including when you register for an account, subscribing to a service, or requesting something from us, or when you fill out surveys, if any such features are available to you).</li>
                <li>Automatically as you navigate through the Services, including through the use of cookies, web beacons, and other tracking technologies (including information about your network or computing device) and analytics services;</li>
                <li>From third parties, for example, our business partners and service providers;</li>
                <li>Records and copies of your correspondence, if you contact us through the Services;</li>
                <li>When you engage in transactions on our Services;</li>
                <li>When you run searches on our Services; and</li>
                <li>When you contact our customer service agents, if available.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Automatic Data Collection Technologies</h2>
              <p className="mb-4">
                As you navigate through and interact with our Services, we may use automatic data collection technologies to collect 
                certain information about you, your equipment, your technology providers, and your activities, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Details of your visits to our Services, including traffic data, browsing patterns, location data, logs, and other communication data and the resources that you access and use on the Services; and</li>
                <li>Information about your device and about your internet connection and service provider, as set forth above.</li>
              </ul>
              
              <p className="mb-4">
                The information we collect automatically may be statistical data and may also include personal information, or we may 
                maintain it or associate it with personal information we collect in other ways or receive from third parties. This information enables us to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Allow you to use and access the Services, and engage in transactions;</li>
                <li>Prevent fraudulent activity and improve security functionality;</li>
                <li>Assess the performance of the Services, including as part of our analytic practices or otherwise to improve the content, products or services offered through the Services;</li>
                <li>Offer you enhanced functionality when accessing the Services, including identifying you when you sign into our Services, and keeping track of your specified preferences;</li>
                <li>Deliver content relevant to your interests on our Services and third-party sites based on how you interact with our advertisements and/or content;</li>
                <li>Estimate our audience size and usage patterns;</li>
                <li>Speed up your searches; and</li>
                <li>Analyze our services and products and perform market research.</li>
              </ul>
            </section>
            
            <section>
              <p className="mb-4">The technologies we use for this automatic data collection may include:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Cookies (or browser cookies).</strong> A cookie is a small file placed on the hard drive of your computer. Note that while you can set your browser to not allow cookies, we may not be able to honor that request, and may track your activity and collect information about you and your online activities even when the browser is set to "do not track";</li>
                <li><strong>Flash Cookies.</strong> Certain features of our Services may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Services. Flash cookies are not managed by the same browser settings as are used for browser cookies and you may not be able to shut down our collection of and use of information through this technology;</li>
                <li><strong>Web Beacons, Pixels and Tags.</strong> Pages of our Services and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity);</li>
                <li><strong>Embedded Scripts.</strong> An embedded script is programming code that is designed to collect information about your interactions with the Services, such as information about the links you click on;</li>
                <li><strong>ETag, or entity tag.</strong> An ETag, or entity tag, is a feature of the cache in browsers. It is an opaque identifier assigned by a web server to a specific version of a resource found at a URL. It is one of several mechanisms that HTTP provides for web cache validation. These allow websites to be more efficient and not serve content again, when data is already cached and ready to view;</li>
                <li><strong>Fingerprinting.</strong> Fingerprinting refers to the collection and analysis of information from your device, such as your operating system, plug-ins, system fonts and other data, for purposes of identification;</li>
                <li><strong>Recognition Technologies.</strong> Recognition technologies refers to various technology features used by websites, including application of statistical probability to data sets, which attempt to recognize or make assumptions about users and devices (e.g., that a user of multiple devices is the same user); and</li>
                <li><strong>Log Files.</strong> These track actions occurring on our Services, and help us collect your IP address, browser type, Internet service provider, the webpages from which you came or to which you go before and after visiting our Services, and the date and time of your visits.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Do Not Track</h2>
              <p>
                Do Not Track ("DNT") is a concept promoted by certain regulatory authorities and industry groups for development and 
                implementation of a mechanism that would allow internet users to control the tracking of their online activities across websites. 
                Currently, various browsers (including Internet Explorer, Firefox, and Safari) offer a DNT option that allows a user to set a 
                preference in the browser to not have his/her activities on the internet tracked. You can usually access your browser's DNT 
                option in your browser's preferences. When a user's browser is set to DNT, some cookies and other tracking technologies may 
                become inactive, depending on how the website visited responds to DNT browser settings. If that occurs, the website visited 
                will not recognize you upon return to that website, save your passwords or user names, and some other features of a website 
                may become unavailable or not function properly. Given the lack of a standard in the industry, we do not comply with DNT 
                signals from your browser at this time.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Third-Party Cookies and Other Technologies</h2>
              <p className="mb-4">
                Some content or applications, including advertisements, on the Services may be served by third parties, including advertisers, 
                ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in 
                conjunction with web beacons or other tracking technologies to collect information about you when you use our Services. 
                The information they collect may be associated with your personal information or they may collect information, including 
                personal information, about your online activities over time and across different websites and other online services. 
                They may use this information to provide you with interest-based (behavioral) advertising or other targeted content.
              </p>
              <p>
                We do not control these third parties' technologies or how they may be used. If you have any questions about an 
                advertisement or other targeted content, you should contact the responsible provider directly.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <p className="mb-4">
                We may use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>To present our Services and their contents to you;</li>
                <li>To provide you with information, products, or services that you request from us;</li>
                <li>To provide customer support, if such features are available;</li>
                <li>To enable you to engage in transactions;</li>
                <li>To fulfill any other purpose for which you provide it;</li>
                <li>To provide you with notices about your account and/or the Services;</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection, if needed;</li>
                <li>To notify you about changes to our Services or any products or services we offer or provide though them;</li>
                <li>To allow you to participate in interactive features on our Services, if any;</li>
                <li>To develop and improve our products and services;</li>
                <li>For behavioral tracking, profiling and advertising;</li>
                <li>For any other purpose as needed for our business;</li>
                <li>In any other way we may describe when you provide the information;</li>
                <li>For any other purpose with your consent;</li>
                <li>For security and anti-fraud purposes;</li>
                <li>To contact you about our own and third-parties' goods and services that we think may be of interest to you; and</li>
                <li>To enable us to display advertisements to our advertisers' target audiences.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Disclosure of Your Information</h2>
              <p className="mb-4">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.
              </p>
              <p className="mb-4">
                We may disclose personal information that we collect or you provide as described in this privacy policy:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>To our affiliates;</li>
                <li>To contractors, service providers (including chatbots), and other third parties we use to support our business and assist us in providing services and offering our products;</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Company's assets or stock, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Company about our Services' users is among the assets transferred;</li>
                <li>To third parties to market their products or services to you;</li>
                <li>To fulfill the purpose for which you provide it;</li>
                <li>For any other purpose disclosed by us when you provide the information; and</li>
                <li>With your consent.</li>
              </ul>
              
              <p className="mb-4">We may also disclose your personal information:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request;</li>
                <li>To enforce or apply the Terms of Use, including this privacy policy, and any other agreements between us, including for billing and collection purposes; and</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Company, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">International Data Transfers</h2>
              <p>
                We, our affiliates, subsidiaries, and third-party providers may process your personal information outside of your home country. 
                Data privacy laws in the countries to which your personal information is transferred may not be equivalent to, or as protective as, 
                the laws in your home country.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Data Security</h2>
              <p className="mb-4">
                We have implemented measures intended to secure your personal information from accidental loss and from unauthorized access, 
                use, alteration, and disclosure. However, the safety and security of your information also depends on you. Where we have given 
                you (or where you have chosen) a password for access to certain parts of our Services, you are responsible for keeping such 
                information confidential. We ask you not to share your password with anyone, and to change your password from time to time. 
                We also highly recommend that you use a password that is dissimilar to and cannot be easily found by unauthorized third parties 
                who may have obtained your login credentials to other sites. Keep in mind that if you use the same password for all websites, 
                if someone obtains your credentials for one site, they may be able to then use those credentials to log into any other site you use.
              </p>
              <p className="mb-4">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we try to protect your 
                personal information, we cannot guarantee the security of your personal information transmitted through or collected through 
                the use of our Services. Any transmission of personal information is at your own risk.
              </p>
              <p>
                We are not responsible for circumvention of any privacy settings or security measures contained on the Services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Changes to Our Privacy Policy</h2>
              <p>
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat 
                our users' personal information, we may notify you by email to the email address specified in your account, if applicable, 
                and/or we may post a notice on the Website's home page. The date this privacy policy was last revised is identified at the 
                top of this page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                <br />
                E-mail: <a href="mailto:privacy@powersnipe.app" className="text-accent hover:text-accent/80 transition-colors">privacy@powersnipe.app</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
