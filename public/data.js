window.NGIQ = (function () {
  const SUBJ = {
    health: { label: 'Digital Health', c: 'oklch(0.52 0.11 160)' },
    management: { label: 'Management', c: 'oklch(0.52 0.11 250)' },
    society: { label: 'Society', c: 'oklch(0.52 0.11 25)' },
    entrepreneurship: { label: 'Entrepreneurship & Innovation', c: 'oklch(0.52 0.11 65)' },
    computing: { label: 'Computing', c: 'oklch(0.52 0.11 220)' },
    interdisciplinary: { label: 'Interdisciplinary', c: 'oklch(0.52 0.11 310)' },
    mathematics: { label: 'Mathematics', c: 'oklch(0.52 0.11 285)' },
    electronics: { label: 'Electronics & Quantum', c: 'oklch(0.52 0.11 190)' }
  };
  const journals = [
    { code: 'IJDH', slug: 'ijdh', title: 'International Journal of Digital Health', subject: 'Digital Health', sk: 'health', scope: 'Clinical informatics, telemedicine, mobile and wearable health, health data science, AI-assisted diagnosis, digital therapeutics and health-system interoperability.' },
    { code: 'IJDM', slug: 'ijdm', title: 'International Journal of Digital Management', subject: 'Digital Management', sk: 'management', scope: 'Digital transformation of organisations, information-systems strategy, platform business models, data-driven decision-making, and digital operations and supply chains.' },
    { code: 'IJDS', slug: 'ijds', title: 'International Journal of Digital Society', subject: 'Digital Society', sk: 'society', scope: 'Social consequences of digital technology: digital inclusion, platform governance and policy, online communities, digital rights, and media and communication.' },
    { code: 'IJEI', slug: 'ijei', title: 'International Journal of Entrepreneurship and Innovation', subject: 'Entrepreneurship & Innovation', sk: 'entrepreneurship', scope: 'New venture creation, innovation management, technology transfer, entrepreneurial ecosystems, social entrepreneurship and family business.' },
    { code: 'IJIC', slug: 'ijic', title: 'International Journal of Intelligent Computing', subject: 'Intelligent Computing', sk: 'computing', scope: 'Machine learning, computer vision, natural language processing, knowledge representation, intelligent agents and trustworthy AI.' },
    { code: 'IJIS', slug: 'ijis', title: 'International Journal of Interdisciplinary Science', subject: 'Interdisciplinary Science', sk: 'interdisciplinary', scope: 'Research that crosses disciplinary boundaries, including sustainability science, complex systems, science and technology studies and computational social science.' },
    { code: 'IJMC', slug: 'ijmc', title: 'International Journal of Mathematical Computing', subject: 'Mathematical Computing', sk: 'mathematics', scope: 'Numerical analysis, scientific computing, computational algebra and geometry, optimisation, mathematical modelling and the design and analysis of algorithms.' },
    { code: 'IJMR', slug: 'ijmr', title: 'International Journal of Multidisciplinary Research', subject: 'Multidisciplinary Research', sk: 'interdisciplinary', scope: 'Original research of broad significance across the natural, social, health and engineering sciences, assessed for rigour rather than perceived impact.' },
    { code: 'IJQT', slug: 'ijqt', title: 'International Journal of Quantum Technologies', subject: 'Quantum Technologies', sk: 'electronics', scope: 'Quantum computing, quantum communication and cryptography, quantum sensing and metrology, quantum materials and devices, and quantum algorithms.' },
    { code: 'IJSE', slug: 'ijse', title: 'International Journal of Smart Electronics', subject: 'Smart Electronics', sk: 'electronics', scope: 'Embedded systems, IoT hardware, VLSI and circuit design, sensors and actuators, power electronics and flexible electronics.' }
  ];
  journals.forEach(j => { j.color = SUBJ[j.sk].c; });

  const articles = [
    { id: 'a1', j: 'ijdh', type: 'Research Article', title: 'Remote photoplethysmography for continuous heart-rate monitoring in home-based cardiac rehabilitation: a prospective validation study', authors: ['Amara N. Okafor', 'Daniel Reyes-Morales', 'Lena Hoffmann', 'Kenji Watanabe'], vol: 1, issue: 2, pages: '45–67', doi: '10.63521/ijdh.2026.0014', date: '12 June 2026', year: 2026, access: 'Open access', views: 2184, downloads: 731, citations: 4,
      abstract: 'Home-based cardiac rehabilitation depends on reliable monitoring of exercise intensity, yet chest-strap sensors are frequently abandoned by patients. We evaluated a camera-based remote photoplethysmography (rPPG) pipeline against electrocardiography in 112 participants completing supervised home sessions. Mean absolute error was 2.9 beats per minute at rest and 4.6 during moderate exercise, with agreement degrading under low illumination. The findings support rPPG as an adjunct, but not a replacement, for contact sensors in remote programmes.',
      keywords: ['remote photoplethysmography', 'cardiac rehabilitation', 'telemonitoring', 'computer vision', 'validation study'] },
    { id: 'a2', j: 'ijic', type: 'Research Article', title: 'Calibrated uncertainty for small-sample medical image segmentation using conformal prediction', authors: ['Priya Raman', 'Tomasz Nowak', 'Sarah El-Amin'], vol: 1, issue: 2, pages: '88–109', doi: '10.63521/ijic.2026.0021', date: '3 June 2026', year: 2026, access: 'Open access', views: 1620, downloads: 512, citations: 2,
      abstract: 'Segmentation models trained on small clinical datasets produce over-confident masks. We adapt split conformal prediction to pixel-level outputs and report coverage guarantees on three public datasets with fewer than 300 labelled images each.', keywords: ['conformal prediction', 'segmentation', 'uncertainty quantification'] },
    { id: 'a3', j: 'ijqt', type: 'Review', title: 'Error mitigation on noisy intermediate-scale quantum hardware: a systematic review of methods and benchmarks, 2019–2025', authors: ['Hannah Lindqvist', 'Rafael Okonkwo'], vol: 1, issue: 2, pages: '12–44', doi: '10.63521/ijqt.2026.0009', date: '28 May 2026', year: 2026, access: 'Open access', views: 3011, downloads: 1204, citations: 7,
      abstract: 'We review 214 studies of quantum error mitigation published between 2019 and 2025, classify methods into five families, and identify inconsistencies in benchmark reporting that prevent direct comparison.', keywords: ['quantum error mitigation', 'NISQ', 'benchmarking', 'systematic review'] },
    { id: 'a4', j: 'ijdm', type: 'Research Article', title: 'Platform dependence and pricing autonomy among small online retailers: evidence from 1,400 European firms', authors: ['Marco Bellini', 'Ingrid Solberg', 'Yusuf Demir'], vol: 1, issue: 1, pages: '1–24', doi: '10.63521/ijdm.2026.0003', date: '14 April 2026', year: 2026, access: 'Open access', views: 1288, downloads: 402, citations: 1,
      abstract: 'Using survey and transaction data from 1,400 small retailers, we estimate how reliance on a single marketplace constrains pricing decisions and how multi-homing moderates the effect.', keywords: ['platform economy', 'pricing', 'SMEs', 'multi-homing'] },
    { id: 'a5', j: 'ijmc', type: 'Research Article', title: 'A mixed-precision preconditioned conjugate gradient method with provable stability bounds', authors: ['Wei Zhang', 'Elena Petrova'], vol: 1, issue: 2, pages: '110–131', doi: '10.63521/ijmc.2026.0017', date: '9 June 2026', year: 2026, access: 'Open access', views: 864, downloads: 299, citations: 0,
      abstract: 'We derive backward-error bounds for a preconditioned conjugate gradient solver that stores the preconditioner in half precision, and confirm the bounds on SuiteSparse matrices.', keywords: ['mixed precision', 'conjugate gradient', 'numerical stability'] },
    { id: 'a6', j: 'ijds', type: 'Short Communication', title: 'Measuring digital exclusion among older adults: a validated eight-item instrument', authors: ['Fiona MacLeod', 'Ana Carvalho'], vol: 1, issue: 1, pages: '25–33', doi: '10.63521/ijds.2026.0005', date: '20 April 2026', year: 2026, access: 'Open access', views: 742, downloads: 210, citations: 0,
      abstract: 'We present and validate an eight-item instrument measuring digital exclusion in adults over 65, tested with 2,016 respondents in Portugal and Scotland.', keywords: ['digital inclusion', 'older adults', 'psychometrics'] },
    { id: 'a7', j: 'ijse', type: 'Research Article', title: 'A 0.9 µW always-on wake-word detector in 22 nm FD-SOI for battery-free sensor nodes', authors: ['Jun-ho Park', 'Matthias Keller', 'Aisha Bello', 'Luis Ortega', 'Sven Andersson', 'Mei Lin'], vol: 1, issue: 2, pages: '132–150', doi: '10.63521/ijse.2026.0019', date: '15 June 2026', year: 2026, access: 'Open access', views: 1093, downloads: 388, citations: 1,
      abstract: 'We report an analogue-domain feature extractor and binarised classifier achieving 94.1% detection accuracy at 0.9 µW, enabling continuous keyword spotting from harvested energy.', keywords: ['ultra-low power', 'keyword spotting', 'FD-SOI', 'energy harvesting'] },
    { id: 'a8', j: 'ijei', type: 'Case Study', title: 'Scaling a university spin-out without venture capital: a twelve-year case study in medical devices', authors: ['Rachel Adeyemi'], vol: 1, issue: 1, pages: '34–52', doi: '10.63521/ijei.2026.0006', date: '2 May 2026', year: 2026, access: 'Open access', views: 615, downloads: 190, citations: 0,
      abstract: 'This case study traces the financing, regulatory and organisational decisions of a medical-device spin-out that reached profitability through revenue and grant funding alone.', keywords: ['spin-out', 'bootstrapping', 'medical devices', 'technology transfer'] },
    { id: 'a9', j: 'ijdh', type: 'Editorial', title: 'Evidence before adoption: an editorial agenda for digital health research', authors: ['Editorial Office, IJDH'], vol: 1, issue: 1, pages: '1–3', doi: '10.63521/ijdh.2026.0001', date: '1 April 2026', year: 2026, access: 'Open access', views: 1480, downloads: 320, citations: 2,
      abstract: 'The inaugural editorial sets out the journal’s expectations for evaluation design, reporting standards and data availability in digital health studies.', keywords: ['editorial', 'evaluation', 'reporting standards'] },
    { id: 'a10', j: 'ijis', type: 'Perspective', title: 'Why interdisciplinary peer review needs explicit criteria for integration', authors: ['Olivia Grant', 'Samuel Mensah'], vol: 1, issue: 2, pages: '60–68', doi: '10.63521/ijis.2026.0012', date: '22 May 2026', year: 2026, access: 'Open access', views: 930, downloads: 274, citations: 1,
      abstract: 'We argue that reviewers of interdisciplinary work assess disciplinary components separately and rarely evaluate integration itself, and propose four criteria for doing so.', keywords: ['peer review', 'interdisciplinarity', 'research evaluation'] },
    { id: 'a11', j: 'ijmr', type: 'Research Article', title: 'Groundwater nitrate trends and agricultural policy change across 38 river basins, 2000–2024', authors: ['Karin Vos', 'Ahmed Haddad', 'Julia Brenner'], vol: 1, issue: 2, pages: '70–96', doi: '10.63521/ijmr.2026.0015', date: '5 June 2026', year: 2026, access: 'Open access', views: 701, downloads: 233, citations: 0,
      abstract: 'Using a difference-in-differences design on monitoring-well data, we estimate the effect of nitrate-vulnerable-zone designation on groundwater concentrations.', keywords: ['nitrate', 'groundwater', 'agricultural policy', 'difference-in-differences'] },
    { id: 'a12', j: 'ijic', type: 'Review', title: 'Evaluation practices for retrieval-augmented language models: a scoping review', authors: ['Nikhil Varma', 'Clara Dubois', 'Ben Adler'], vol: 1, issue: 1, pages: '40–71', doi: '10.63521/ijic.2026.0008', date: '25 April 2026', year: 2026, access: 'Open access', views: 2402, downloads: 899, citations: 5,
      abstract: 'We map 167 evaluation studies of retrieval-augmented generation and find that fewer than a fifth report retrieval quality separately from answer quality.', keywords: ['retrieval-augmented generation', 'evaluation', 'scoping review'] }
  ];

  const cfps = [
    { id: 'c1', j: 'ijdh', theme: 'Artificial intelligence in primary care: evaluation, safety and equity', deadline: '31 October 2026', sortKey: 20261031, status: 'Closing soon', guest: 'Dr Helen Achterberg, Leiden University Medical Center' },
    { id: 'c2', j: 'ijqt', theme: 'Quantum networking testbeds and early deployments', deadline: '30 November 2026', sortKey: 20261130, status: 'Open', guest: 'Prof. Daniel Ostrowski, Warsaw University of Technology' },
    { id: 'c3', j: 'ijdm', theme: 'Generative AI and the reorganisation of knowledge work', deadline: '15 January 2027', sortKey: 20270115, status: 'Open', guest: 'Prof. Laura Fenwick, University of Bath' },
    { id: 'c4', j: 'ijse', theme: 'Energy-harvesting electronics for the Internet of Things', deadline: '28 February 2027', sortKey: 20270228, status: 'Open', guest: 'Dr Arjun Mehta, IIT Madras' },
    { id: 'c5', j: 'ijds', theme: 'Platform governance after the Digital Services Act', deadline: '31 March 2027', sortKey: 20270331, status: 'Open', guest: 'Dr Sofia Lindgren, Stockholm University' },
    { id: 'c6', j: 'ijei', theme: 'Entrepreneurial ecosystems in secondary cities', deadline: '15 September 2026', sortKey: 20260915, status: 'Closed', guest: 'Prof. Tunde Ajayi, University of Lagos' }
  ];

  const news = [
    { date: '2 September 2026', type: 'Announcement', title: 'All ten NextGenIQ Press journals are now accepting submissions' },
    { date: '18 August 2026', type: 'Infrastructure', title: 'DOI registration through Crossref confirmed for all journals' },
    { date: '29 July 2026', type: 'Editorial', title: 'Applications open for founding editorial board members' }
  ];

  const pageGroups = [
    { group: 'About', items: [['about', 'About the journal'], ['aims-scope', 'Aims and scope'], ['editorial-board', 'Editorial board'], ['indexing', 'Indexing and abstracting'], ['news', 'News'], ['editorial-office', 'Editorial office']] },
    { group: 'For authors', items: [['author-instructions', 'Author instructions'], ['article-types', 'Article types'], ['peer-review-process', 'Peer review process'], ['apc', 'Article processing charges'], ['reviewer-guidelines', 'Reviewer guidelines'], ['special-issue-guidelines', 'Special issue guidelines']] },
    { group: 'Policies', items: [['publication-ethics', 'Publication ethics'], ['open-access', 'Open access'], ['copyright-licensing', 'Copyright and licensing'], ['generative-ai-policy', 'Generative AI policy'], ['research-data-policy', 'Research data policy'], ['corrections-retractions', 'Corrections and retractions']] },
    { group: 'Articles and issues', items: [['current-issue', 'Current issue'], ['articles-in-press', 'Articles in press'], ['special-issues', 'Special issues'], ['call-for-papers', 'Call for papers']] }
  ];

  const typesTable = { head: ['Article type', 'Word limit', 'Abstract', 'Structure', 'Review model'], rows: [
    ['Research Article', '8,000', 'Structured, 250 words', 'Introduction, Methods, Results, Discussion', 'Double-blind, 2+ reviewers'],
    ['Review', '10,000', 'Unstructured, 250 words', 'Free, with stated search method', 'Double-blind, 2+ reviewers'],
    ['Short Communication', '3,000', 'Unstructured, 150 words', 'Condensed IMRaD', 'Double-blind, 2 reviewers'],
    ['Case Study', '5,000', 'Unstructured, 200 words', 'Context, Case, Analysis, Lessons', 'Double-blind, 2 reviewers'],
    ['Perspective', '3,000', 'Unstructured, 150 words', 'Free', 'Double-blind, 1–2 reviewers'],
    ['Editorial', '1,500', 'None', 'Free', 'Editor review'] ] };

  const pages = {
    'about': [
      { h: 'Overview', p: ['The {J} ({C}) is a peer-reviewed, open-access journal published by NextGenIQ Press. It publishes original research, reviews and short communications in {S}.', 'Articles are published continuously: each article appears online as soon as it is accepted, copy-edited and typeset, and is then assigned to the current volume.'] },
      { h: 'Journal facts', ul: ['Publisher: NextGenIQ Press', 'ISSN (online): applied for', 'Publication model: continuous, open access', 'Peer review: double-blind, minimum two reviewers', 'Licence: Creative Commons Attribution 4.0 (CC BY 4.0)', 'Submission fee: none'] }
    ],
    'aims-scope': [
      { h: 'Aims', p: ['{J} provides a venue for rigorous, reproducible research in {S}. The journal favours work whose methods and data allow others to verify and build on its findings.'] },
      { h: 'Scope', p: ['The journal considers manuscripts on topics including:'], ul: ['{SCOPE}'] },
      { h: 'Outside scope', p: ['Manuscripts that describe products without evaluation, opinion pieces not commissioned as Perspectives, and work already published elsewhere are declined without review.'] }
    ],
    'editorial-board': [
      { h: 'Board structure', p: ['The editorial board comprises an Editor-in-Chief, Senior Editors responsible for subject sections, Associate Editors who manage individual manuscripts, and an international Advisory Board.'] },
      { h: 'Appointments', p: ['Founding appointments are being confirmed. Members are listed here once their appointment has been accepted in writing; until then, manuscripts are handled by the Editorial Office under the oversight of the Publisher’s Editorial Director.'] },
      { h: 'Joining the board', p: ['Researchers holding a doctorate and an established publication record in {S} may apply. Include a CV, ORCID iD and a statement of the topics you are qualified to assess.'] }
    ],
    'indexing': [
      { h: 'Current status', p: ['The journal is new. Applications to indexing services are made once the eligibility criteria of each service are met, typically after a minimum number of published articles or a period of continuous publication.'] },
      { h: 'Status by service', table: { head: ['Service', 'Status', 'Note'], rows: [['Crossref (DOI registration)', 'Active', 'All articles receive a DOI'], ['Google Scholar', 'Active', 'Citation metadata exposed on every article'], ['Directory of Open Access Journals (DOAJ)', 'Planned', 'Eligible after one year of publication'], ['Scopus', 'Planned', 'Eligible after two years of publication'], ['Web of Science (ESCI)', 'Planned', 'Application after sustained publication']] } }
    ],
    'news': [
      { h: 'Journal news', p: ['Announcements about calls for papers, editorial appointments and policy updates are posted here and sent to subscribers of the journal’s email alerts.'] }
    ],
    'editorial-office': [
      { h: 'Contact', p: ['The Editorial Office handles queries about submissions in progress, policies and special-issue proposals. We reply within two working days.'], ul: ['Email: {SLUG}@nextgeniqpress.com', 'Office hours: Monday–Friday, 09:00–17:00 UTC'] },
      { h: 'Before you write', p: ['For the status of a submission, check your author dashboard first; it shows the current stage and the next expected action.'] }
    ],
    'author-instructions': [
      { h: 'Before you begin', p: ['Confirm that your manuscript falls within the journal’s aims and scope, has not been published or submitted elsewhere, and has been approved by all authors.'], ul: ['Read the publication ethics and generative AI policies', 'Prepare an anonymised manuscript for double-blind review', 'Obtain ORCID iDs for all authors (required for the corresponding author)'] },
      { h: 'Article types', p: ['Choose the article type that best describes your work. Word limits exclude the abstract, references, tables and figure captions.'], table: typesTable },
      { h: 'Manuscript preparation', p: ['Submit manuscripts as Word (.docx) or LaTeX (with a compiled PDF). Use the journal template; it sets the required headings, line numbering and reference style.'], sub: [
        { h: 'Title page', p: ['Upload the title page as a separate file. It contains the full title, all author names and affiliations, the corresponding author’s email, and the declarations.'] },
        { h: 'Abstract and keywords', p: ['Provide an abstract within the limit for your article type and between three and eight keywords that do not repeat words in the title.'] },
        { h: 'Anonymisation', p: ['Remove author names, acknowledgements and self-identifying citations from the main manuscript. Refer to your own prior work in the third person.'] }
      ] },
      { h: 'References', p: ['Use numbered references in order of first citation, in the style shown in the template. Include DOIs wherever available.'] },
      { h: 'Figures and tables', p: ['Number figures and tables consecutively and cite each in the text.'], ul: ['Figures: TIFF, EPS or PNG, at least 300 dpi at final size', 'Tables: editable, not images', 'Colour: ensure figures remain interpretable in greyscale', 'Alt text: provide a one-sentence description of each figure'] },
      { h: 'Declarations', p: ['Every manuscript must include statements on funding, competing interests, ethics approval and consent, data availability, author contributions (CRediT) and use of generative AI tools.'] },
      { h: 'Submission', p: ['Submit through the NextGenIQ Press submission system. You can save a draft at any step and return to it from your author dashboard.'] }
    ],
    'article-types': [ { h: 'Accepted article types', p: ['Word limits exclude the abstract, references, tables and figure captions.'], table: typesTable } ],
    'peer-review-process': [
      { h: 'Model', p: ['{J} operates double-blind peer review: reviewers do not know the identity of the authors, and authors do not know the identity of the reviewers.'] },
      { h: 'Stages and target times', table: { head: ['Stage', 'What happens', 'Target time'], rows: [['Technical check', 'Completeness, formatting, similarity check', '3 working days'], ['Editorial assessment', 'Scope and suitability for review', '7 days'], ['Peer review', 'Minimum two independent reviewers', '4–6 weeks'], ['First decision', 'Accept, minor or major revision, or reject', '6 weeks from submission'], ['Production', 'Copy-editing, typesetting, proof approval', '3 weeks after acceptance']] } },
      { h: 'Appeals', p: ['Authors may appeal a decision within 30 days by writing to the Editorial Office with a point-by-point rationale. Appeals are assessed by an editor not involved in the original decision.'] }
    ],
    'apc': [
      { h: 'Current charges', table: { head: ['Item', 'Charge'], rows: [['Submission fee', 'None'], ['Article processing charge (APC)', 'None for manuscripts submitted during the launch period'], ['Colour figures, supplementary files, page length', 'No charge']] } },
      { h: 'Future changes', p: ['Any future APC will be announced on this page at least six months before it takes effect and will not apply to manuscripts already submitted.'] },
      { h: 'Waivers', p: ['When an APC is introduced, full waivers will apply to corresponding authors based in countries classified by the World Bank as low-income, and partial waivers to lower-middle-income countries. Editors are not informed of waiver requests.'] }
    ],
    'reviewer-guidelines': [
      { h: 'Accepting an invitation', p: ['Accept only if the manuscript is within your expertise, you have no competing interest, and you can return a report within 21 days.'] },
      { h: 'Writing the report', ul: ['Summarise the manuscript’s claims in two or three sentences', 'Assess whether the methods support the conclusions', 'Distinguish essential revisions from suggestions', 'Keep comments to authors constructive and specific', 'Use confidential comments to the editor for concerns about ethics or misconduct'] },
      { h: 'Confidentiality', p: ['Manuscripts under review are confidential. Do not upload them to generative AI tools or share them with colleagues without the editor’s permission.'] }
    ],
    'special-issue-guidelines': [
      { h: 'Proposing a special issue', p: ['Guest editors submit a proposal of up to two pages: theme, rationale, indicative topics, guest-editor biographies and a proposed timeline.'] },
      { h: 'Editorial standards', p: ['Special-issue manuscripts follow the same double-blind review as regular submissions. Guest editors may not handle manuscripts on which they are authors; these are assigned to an independent editor.'] }
    ],
    'publication-ethics': [
      { h: 'Principles', p: ['NextGenIQ Press follows the Core Practices of the Committee on Publication Ethics (COPE) and handles suspected misconduct using COPE flowcharts.'] },
      { h: 'Author responsibilities', ul: ['Submit original work not under consideration elsewhere', 'Credit all contributors and cite sources accurately', 'Disclose all funding and competing interests', 'Report errors discovered after publication promptly'] },
      { h: 'Similarity screening', p: ['All submissions are checked with similarity-detection software before review. Overlap with published work, including the authors’ own, must be cited and justified.'] }
    ],
    'open-access': [
      { h: 'Open access model', p: ['All articles are freely available to read, download and reuse immediately upon publication. There are no subscription or access barriers.'] },
      { h: 'Preprints', p: ['Authors may post preprints on recognised servers at any time. Please provide the preprint DOI at submission; reviewers are not asked to search for it.'] }
    ],
    'copyright-licensing': [
      { h: 'Licence', p: ['Articles are published under the Creative Commons Attribution 4.0 International licence (CC BY 4.0). Others may share and adapt the work for any purpose, provided the original is properly cited.'] },
      { h: 'Copyright', p: ['Authors retain copyright. They grant NextGenIQ Press a non-exclusive licence to publish the article and identify it as the original publisher.'] }
    ],
    'generative-ai-policy': [
      { h: 'Authors', p: ['Generative AI tools cannot be listed as authors. Authors who use such tools for writing, analysis or image generation must disclose the tool, version and purpose in the declarations and remain responsible for the content.'] },
      { h: 'Reviewers and editors', p: ['Reviewers and editors must not upload manuscripts or reports to generative AI tools, as this breaches confidentiality.'] }
    ],
    'research-data-policy': [
      { h: 'Data availability', p: ['Every article includes a data availability statement. Where possible, data supporting the findings should be deposited in a recognised repository and cited with a persistent identifier.'] },
      { h: 'Code', p: ['Code needed to reproduce analyses should be shared through a public repository with an archived release.'] }
    ],
    'corrections-retractions': [
      { h: 'Corrections', p: ['Errors that affect interpretation are corrected through a published correction notice linked to the original article. The article itself is updated and marked as corrected.'] },
      { h: 'Retractions', p: ['Articles are retracted when findings are unreliable or misconduct is established. Retracted articles remain online, clearly marked, with a linked retraction notice explaining the reason.'] }
    ],
    'articles-in-press': [ { h: 'Articles in press', p: ['Accepted articles appear here with their DOI as soon as they are published online, before assignment to an issue. Each article is citable from the date it first appears.'] } ],
    'special-issues': [ { h: 'Special issues', p: ['Special issues collect articles on a focused theme under the guidance of guest editors. Manuscripts are reviewed to the same standard as regular submissions.'] } ],
    'call-for-papers': [ { h: 'Call for papers', p: ['The journal welcomes submissions on all topics within its scope throughout the year. Thematic calls with deadlines are listed below.'] } ],
    'current-issue': [ { h: 'Current issue', p: ['See the current issue page.'] } ]
  };

  const fmt = (s, j) => s.replace(/\{J\}/g, j.title).replace(/\{C\}/g, j.code).replace(/\{S\}/g, j.subject.toLowerCase()).replace(/\{SLUG\}/g, j.slug);

  return {
    SUBJ, journals, articles, cfps, news, pageGroups, pages, typesTable,
    journal: s => journals.find(j => j.slug === (s || '').toLowerCase()) || journals[0],
    isMature: () => true,
    param: k => new URLSearchParams(location.search).get(k),
    pageBlocks(id, j) {
      const src = pages[id] || pages['about'];
      return src.map((b, i) => {
        const ul = (b.ul || []).flatMap(x => x === '{SCOPE}' ? j.scope.replace(/\.$/, '').split(/, (?:and )?/).map(t => t.charAt(0).toUpperCase() + t.slice(1)) : [fmt(x, j)]);
        return { id: 's' + (i + 1), n: i + 1, h: b.h, p: (b.p || []).map(x => fmt(x, j)), ul, hasUl: ul.length > 0, table: b.table || null, hasTable: !!b.table,
          sub: (b.sub || []).map((s, k) => ({ id: 's' + (i + 1) + '-' + (k + 1), n: (i + 1) + '.' + (k + 1), h: s.h, p: (s.p || []).map(x => fmt(x, j)) })), hasSub: !!(b.sub && b.sub.length) };
      });
    },
    pageTitle(id) { for (const g of pageGroups) for (const it of g.items) if (it[0] === id) return { title: it[1], group: g.group }; return { title: 'About the journal', group: 'About' }; },
    pageHref(id, slug) {
      if (id === 'current-issue') return 'Issue.dc.html?j=' + slug;
      return 'JournalPage.dc.html?j=' + slug + '&p=' + id;
    },
    authorsShort(a) { return a.length > 4 ? a.slice(0, 3).join(', ') + ' + ' + (a.length - 3) + ' more' : a.join(', '); }
  };
})();
