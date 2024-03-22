export default function Privacy() {
  const Sections = [
    {
      title: 'Information We Collect',
      content:
        'Selbekk Studio offers web design and development services, including but not limited to, website design, web development, maintenance, hosting, and consulting services. The specific services to be provided will be outlined in your service agreement or project proposal.',
    },
    {
      title: 'Service Agreement',
      content:
        'Upon agreeing to work with Selbekk Studio, clients will receive a service agreement or project proposal outlining the scope of work, project timeline, payment terms, and other relevant details. Clients are required to review and accept these terms before any work commences.',
    },
    {
      title: 'Payments and Billing',
      content:
        'Payment terms will be specified in the service agreement. Generally, Selbekk Studio either takes the payment in full or requires a deposit to commence work, with the balance due upon project completion or as agreed in the payment schedule. Late payments may incur additional charges or result in a suspension of services.',
    },
    {
      title: 'Client Responsibilities',
      content:
        'Clients are responsible for providing all necessary content, materials, and information required for the completion of the project. Clients must ensure that they have the rights to use any content or materials provided to Selbekk Studio.',
    },
    {
      title: 'Intellectual Property Rights',
      content:
        'Upon full payment, the final deliverables of the project (e.g., website design, code, graphics) will be transferred to the client. However, Selbekk Studio retains the right to use project designs, concepts, and related materials for its portfolio, promotional, and marketing purposes unless otherwise agreed upon.',
    },
    {
      title: 'Revisions and Acceptance',
      content:
        'The service agreement will specify the number of revisions or changes allowed within the scope of the project. Once the project is completed and delivered, the client will have a specified period to review and request any final adjustments.',
    },
    {
      title: 'Termination',
      content:
        'Either party may terminate the agreement with written notice if the other party breaches these terms and fails to correct the breach within a specified period. Termination terms, including any applicable fees or refunds, will be outlined in the service agreement.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'Selbekk Studio will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, arising out of or in connection with the use of our services.',
    },
    {
      title: 'Governing Law',
      content:
        'These terms and conditions are governed by the laws of the jurisdiction in which Selbekk Studio is registered. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of that jurisdiction.',
    },
    {
      title: 'Amendments',
      content:
        'Selbekk Studio reserves the right to modify these terms and conditions at any time. Your continued use of our services after any such changes constitutes your acceptance of the new terms.',
    },
  ];

  return (
    <div className='min-h-screen mx-auto max-w-[800px] flex flex-col items-center border-dotted border-x-2 py-8 px-6 text-left'>
      <div className='flex flex-col w-full'>
        <div className='pb-10'>
          <h1 className='text-2xl font-semibold pb-4'>
            Privacy Policy for Selbekk Studio
          </h1>
          <p className='text-sm text-gray-500 pb-4'>
            Welcome to Selbekk Studio! Your privacy is critically important to
            us, and we are committed to protecting the personal information you
            share with us. This Privacy Policy outlines how we collect, use,
            store, and share your information, as well as the choices you have
            regarding your personal data.
          </p>
        </div>

        <div className='pb-6'>
          <h2 className='text-lg font-semibold pb-4 underline'>
            1.Information We Collect
          </h2>
          <div className='pb-6'>
            <h3 className='text-base font-semibold pb-2'>
              Personal Information:
            </h3>
            <p className='text-sm text-gray-500'>
              We collect personal information you provide to us. This includes
              your name, email address, phone number, and any other details you
              provide when you interact with our services, such as when you
              inquire about our services, sign up for our newsletter, or engage
              with our customer support.
            </p>
          </div>
          <div className='pb-6'>
            <h3 className='text-base font-semibold pb-2'>Usage Information:</h3>
            <p className='text-sm text-gray-500'>
              When you visit our website, we automatically collect information
              about your device and how you interact with our services. This can
              include your IP address, browser type, device type, pages you
              visit, and the time spent on those pages.
            </p>
          </div>
          <div className='pb-6'>
            <h3 className='text-base font-semibold pb-2'>
              Cookies and Tracking Technologies:
            </h3>
            <p className='text-sm text-gray-500'>
              We use cookies and similar tracking technologies to track the
              activity on our service and hold certain information. Cookies are
              files with a small amount of data that may include an anonymous
              unique identifier.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className='text-lg font-semibold pb-4 underline'>
            2. How We Use Your Information
          </h2>
          <div className='pb-6'>
            <h3 className='text-base font-semibold pb-2'>
              To Provide and Maintain Our Service:
            </h3>
            <p className='text-sm text-gray-500'>
              We use your information to provide and maintain our services,
              including to monitor the usage of our service and to manage your
              account.
            </p>
          </div>
          <div className='pb-6'>
            <h3 className='text-base font-semibold pb-2'>Communication: </h3>
            <p className='text-sm text-gray-500'>
              We use your personal information to contact you with newsletters,
              marketing or promotional materials, and other information that may
              be of interest to you. You may opt out of receiving any, or all,
              of these communications from us by following the unsubscribe link
              or instructions provided in any email we send.
            </p>
          </div>
          <div className='pb-6'>
            <h3 className='text-base font-semibold pb-2'>Improvement:</h3>
            <p className='text-sm text-gray-500'>
              We use the information to understand how our services are used and
              to improve our website and services, including enhancing usability
              and feature development.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className='text-lg font-semibold pb-4 underline'>
            3. Sharing Your Personal Information
          </h2>
          <div className='pb-6'>
            <p className='text-sm text-gray-500'>
              We do not sell, trade, or rent your personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              regarding visitors and users with our business partners, trusted
              affiliates, and advertisers for the purposes outlined above.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className='text-lg font-semibold pb-4 underline'>4. Security</h2>
          <div className='pb-6'>
            <p className='text-sm text-gray-500'>
              The security of your personal information is important to us, but
              remember that no method of transmission over the Internet or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className='text-lg font-semibold pb-4 underline'>
            4. Your Privacy Rights
          </h2>
          <div className='pb-6'>
            <p className='text-sm text-gray-500'>
              You have the right to access, update, or delete the information we
              have on you. Whenever made possible, you can access, update, or
              request deletion of your personal information directly within your
              account settings section. If you are unable to perform these
              actions yourself, please contact us to assist you.
            </p>
          </div>
        </div>

        <div className='pb-6'>
          <h2 className='text-lg font-semibold pb-4 underline'>
            5. Changes to This Privacy Policy
          </h2>
          <div className='pb-6'>
            <p className='text-sm text-gray-500'>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting
            </p>
          </div>
        </div>

        {/* {Sections.map((item) => (
          <div key={item.title} className='pb-8'>
            <h2 className='text-lg font-semibold pb-2 underline'>
              {item.title}
            </h2>
            <p className='text-sm text-gray-500'>{item.content}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
