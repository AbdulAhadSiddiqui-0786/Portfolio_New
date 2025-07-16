import CertificateCard from "./CertificateCard";

const CertificationSection = () => {
  const certificates = [
    {
      title: "INTERNSHALA TRAININGS\nCertificate of Completion",
      imageUrl: "/certificates/Coursecertificate.png",
      viewLink: "https://trainings.internshala.com/s/v/3635996/b7878ef5",
    },
    {
      title: "Python Certificate",
      imageUrl: "/certificates/PythonCertificate.png",
      viewLink:
        "https://courses.ibmcep.cognitiveclass.ai/certificates/5537ea7b4d724fa286f81f3947e5a11b",
      downloadLink:
        "https://courses.ibmcep.cognitiveclass.ai/asset-v1:IBM+CEPYT1IN+1+type@asset+block@JB-Signature_trans.png",
    },
    {
      title: "Full Stack Certificate",
      imageUrl: "/certificates/Data Science.png",
      viewLink:
        "https://courses.ibmcep.cognitiveclass.ai/certificates/b10624f3f6b948d18754ecf9a6dd1184#",
    },
    {
      title: "Data Visulization Certificate",
      imageUrl: "/certificates/Data Visualization.png",
      viewLink:
        "https://courses.ibmcep.cognitiveclass.ai/certificates/89e25240266c48f78cd2385c40b6db28",
    },
  ];

  return (
    <section id="certificates" className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
