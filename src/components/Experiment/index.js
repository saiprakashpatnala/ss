import IconsRoute from '../IconsRoute'

import './index.css'

const Experiment = () => (
  <div className="lab-con">
    <ul className="experiment-list">
      <li>
        <div className="lab-list">
          <img
            src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665753120/lab-1_d9owts.jpg"
            alt="laboratory"
            className="lab-img"
          />
          <div>
            <h1 className="lab-title">DIAGNOSTIC TESTING SERVICES</h1>
            <p className="lab-description">
              The clinical diagnostic testing services support and accelerate
              the market entry of new drugs, vaccines and antivirals, and assist
              in pre- and post marketing surveillance programs. Services are
              customized to specific needs, enabling maximum flexibility from
              day-to-day analysis to high throughput bulk analysis. Efficacy and
              safety assays target protective immunological responses, assess
              viral loads and monitor drug resistance. In association with the
              assay development department, clinical diagnostic services offer
              tailor-made solutions in consultation with the sponsor in order to
              complete the study as efficiently as possible. Through state of
              the art BSL2 and BSL3 containment facilities and qualified
              biotechnical staff we are able to test immunogenicity and efficacy
              of vaccines, antivirals, antibodies and other products aimed at
              preventing or treating virus infections. In addition we have a
              broad range of validated molecular assays available ranging from
              simple PCR analysis to sensitive sequence analysis directly from
              the clinical sample. All analyses are performed according to ISO
              15189 accreditation.
            </p>
          </div>
        </div>
        <div className="lab-list">
          <img
            src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665753857/lab-2_ceim4p.jpg"
            className="lab-img"
            alt="laboratory"
          />
          <div>
            <h1 className="lab-title">
              VIROCLINICS XELLERATE – CLINICAL TRIAL OPERATIONS SERVICES
            </h1>
            <p className="lab-description">
              Viroclinics Xellerate provides better logistics support for the
              pharmaceutical, biotechnology, and medical device industries and
              gives us the opportunity to monitor the quality from the moment
              the sample is taken to the final test results. All personnel who
              are involved in the clinical trial are trained and all processes,
              temperature monitoring and assays are performed according to the
              ISO 15189 accredited quality system. Logistic activities include
              preparation of virology sampling kits, on-site sampling handling
              instruction, courier transport, sample tracking and tracing (e.g.
              guaranteeing temperature controlled supply chain and online-sample
              timelines) , and management of sample processing labs. Viroclinics
              Xellerate support a smooth logistical flow of samples from all
              over the globe, and works together with a network of 36 processing
              laboratories in USA, Turkey, Mexico , Panama, Costa Rica,
              Argentina, Brazil , Peru ,Japan, South Korea, Singapore , China,
              Poland, Australia, India, South-Africa , Israel, Russia , Ukraine,
              Serbia, Colombia, UK, Germany, Spain, Saudi Arabia and Moldova.
            </p>
          </div>
        </div>
        <div className="lab-list">
          <img
            src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665753823/lab-4_gyggpx.jpg"
            className="lab-img"
            alt="laboratory"
          />
          <div>
            <h1 className="lab-title">
              VIROCLINICS XPLORE – PRECLINICAL SERVICES
            </h1>
            <p className="lab-description">
              Viroclinics Xplore offers preclinical services including testing
              of efficacy, safety, PK and (immune) toxicology of drugs,
              antibodies, vaccines and antivirals targeting viral infectious
              diseases. The BSL-2 and BSL-3 facilities enable complicated
              experiments with highly pathogenic viruses. The qualified biotech
              staff and use of state of the art BSL2 and BSL3 animal facilities
              are key to a successful outcome of studies. Apart from the
              classical endpoints, we are also able to perform (histo) pathology
              of viral disease progression. Viroclinics Xplore offers validated
              diagnostic assays to measure serological and cell mediated immune
              responses, validated assays to detect virus presence and measure
              virus load in different tissues and, if needed, custom made assays
              as requested by the customer. Furthermore, Viroclinics Xplore
              continue to develop relevant models to monitor therapeutic
              efficacy and development of antiviral resistance, e.g. in
              immunocompromised animal models and for H7N9 influenza infection
              and pathogenesis.
            </p>
          </div>
        </div>
        <div className="lab-list">
          <img
            src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665753789/lab-5_exgl0y.jpg"
            className="lab-img"
            alt="laboratory"
          />
          <div>
            <h1 className="lab-title">RESEARCH & DEVELOPMENT SERVICES</h1>
            <p className="lab-description">
              Assay innovation and the introduction of new tools keep analysis
              up to date with the increasingly demanding criteria for developing
              new therapeutic and prophylactic candidates up to market
              registration. Customized assay and protocol development is
              followed by standardization and validation procedures to allow for
              routine application in a clinical trial setting. For example, our
              influenza virus culture assay is now equipped with multiple read
              outs to safeguard virus detection in clinical samples. Our
              genotyping of virus isolates has been optimized to such a level
              that high quality gene sequences are obtained directly on patient
              materials with low viral load. In addition, flowcytometry, ELISPOT
              and Biospot equipment are in place to assess cell-mediated
              immunity, antibody-dependent cell-mediated cytotoxicity, viral
              plaque counts, size and growth kinetics. Our high resolution viral
              plaque assays enables studies on inhibition of both single and
              multiple infection/replication cycles.
            </p>
          </div>
        </div>
        <div className="lab-list">
          <img
            src="https://res.cloudinary.com/drwe3lgdh/image/upload/v1665753757/lab-6_phe7zc.jpg"
            className="lab-img"
            alt="laboratory"
          />
          <div>
            <h1 className="lab-title">VIRUS DISCOVERY</h1>
            <p className="lab-description">
              Viroclinics-DDL Diagnostic Laboratory participates in global
              surveillance programs to monitor and characterize novel virus
              threats to human and animal health (EMPERIE; EU FP-7). Additional
              research programs focus on genomics, discovery of biomarkers,
              correlates of protection and viral reference strain development. A
              recent example of a newly discovered virus Viroclinics
              participated in is the MERS Coronavirus. Furthermore, our
              scientists were at forefront of the discovery of hMPV in 2001 and
              SARS in 2003.
            </p>
          </div>
        </div>
      </li>
    </ul>
    <IconsRoute />
  </div>
)

export default Experiment
