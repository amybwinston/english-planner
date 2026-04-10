// Texas Essential Knowledge and Skills  -  English Language Arts and Reading
// High School, Subchapter C  -  Adopted 2017, Effective 2020-2021
// Source: 19 TAC Chapter 110, Subchapter C
// Last revised: August 2020
// Next expected revision: ~2030
// TEA source: https://tea.texas.gov/sites/default/files/ch110c.pdf

const TEKS = {

  // -- SHARED ACROSS ALL FOUR COURSES ----------------------------------------
  // The 7 strand names and their sub-section structure are identical
  // across English I-IV. What changes is the depth, complexity, and
  // course-specific content focus (American lit, British lit, etc.)

  strands: [
    {
      id: 1,
      name: 'Foundational language skills',
      short: 'Foundational',
      subsections: [
        {
          code: '(c)(1)',
          title: 'Oral language',
          domain: 'Listening, speaking, discussion, and thinking',
          note: 'Progressive across courses  -  complexity of discourse increases each year'
        },
        {
          code: '(c)(2)',
          title: 'Vocabulary',
          domain: 'Listening, speaking, reading, writing, and thinking',
          note: 'Each course adds specific foreign phrases and focuses on increasingly nuanced meanings'
        },
        {
          code: '(c)(3)',
          title: 'Self-sustained reading',
          domain: 'Listening, speaking, reading, writing, and thinking',
          note: 'Identical across all courses: student self-selects text and reads independently for sustained period'
        }
      ],
      coverage: 'Present in every unit  -  oral language, vocabulary, and independent reading are baseline ELA instruction',
      staar: false
    },
    {
      id: 2,
      name: 'Comprehension',
      short: 'Comprehension',
      subsections: [
        {
          code: '(c)(4)',
          title: 'Comprehension skills',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Establish purpose for reading assigned and self-selected texts',
            '(B) Generate questions about text before, during, and after reading',
            '(C) Make and correct or confirm predictions using text features, genre, and structures',
            '(D) Create mental images to deepen understanding',
            '(E) Make connections to personal experiences, ideas in other texts, and society',
            '(F) Make inferences and use evidence to support understanding',
            '(G) Evaluate details read to determine/understand/analyze key ideas',
            '(H) Synthesize information from multiple texts to create new understanding',
            '(I) Monitor comprehension and make adjustments when understanding breaks down'
          ],
          note: 'ENG IV changes (G) to "analyze" key ideas; ENG III/IV add "outside sources" to (I)'
        }
      ],
      coverage: 'Present in every unit  -  STAAR priority strand',
      staar: true
    },
    {
      id: 3,
      name: 'Response',
      short: 'Response',
      subsections: [
        {
          code: '(c)(5)',
          title: 'Response skills',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Describe personal connections to a variety of sources, including self-selected texts',
            '(B) Write responses demonstrating understanding/analysis of texts, comparing across genres',
            '(C) Use text evidence and original commentary to support a response',
            '(D) Paraphrase and summarize texts in ways that maintain meaning and logical order',
            '(E) Interact with sources in meaningful ways: notetaking, annotating, freewriting, illustrating',
            '(F) Respond using acquired content and academic vocabulary as appropriate',
            '(G) Discuss and write about the explicit or implicit meanings of text',
            '(H) Respond orally or in writing with appropriate register, vocabulary, tone, and voice',
            '(I) Reflect on and adjust responses when valid evidence warrants',
            '(J) Defend or challenge the authors\' claims using relevant text evidence'
          ],
          note: 'ENG I: "comprehensive response"; ENG II: "interpretive response"; ENG III/IV: "analytic/evaluative response"'
        }
      ],
      coverage: 'Present in every unit  -  STAAR priority strand',
      staar: true
    },
    {
      id: 4,
      name: 'Multiple genres',
      short: 'Multiple genres',
      subsections: [
        {
          code: '(c)(6)',
          title: 'Literary elements',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Analyze how themes are developed through characterization and plot',
            '(B) Analyze complex character development (foils, archetypes, motivations)',
            '(C) Analyze plot structure  -  linear, non-linear, subplots, parallel plots',
            '(D) Analyze how historical, social, and economic context of setting influences plot, character, and theme'
          ],
          note: 'ENG III/IV: moral dilemmas and their influence on plot and theme; ENG IV: critique and evaluate complex plot structures'
        },
        {
          code: '(c)(7)',
          title: 'Genre study',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Read and respond to literature by period and region (American/British/world)',
            '(B) Analyze poetry  -  structure, prosody, sound devices, graphic elements',
            '(C) Analyze dramatic conventions  -  asides, soliloquies, dramatic irony, satire',
            '(D) Analyze informational texts  -  thesis, evidence, organizational patterns',
            '(E) Analyze argumentative texts  -  claim, appeals, counterarguments, concessions, rebuttals',
            '(F) Analyze characteristics of multimodal and digital texts'
          ],
          note: 'Course-specific literature: ENG I (world), ENG II (world across periods), ENG III (American), ENG IV (British)'
        }
      ],
      coverage: 'Must appear as primary emphasis in at least 5 units per year',
      staar: true
    },
    {
      id: 5,
      name: "Author's purpose and craft",
      short: 'Author craft',
      subsections: [
        {
          code: '(c)(8)',
          title: "Author's purpose and craft",
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            "(A) Analyze the author's purpose, audience, and message within a text",
            "(B) Analyze/evaluate use of text structure to achieve the author's purpose",
            '(C) Evaluate the author\'s use of print and graphic features to achieve specific purposes',
            "(D) Analyze/evaluate how the author's use of language informs and shapes the perception of readers",
            '(E) Analyze/evaluate the use of literary devices (irony, oxymoron, motif, paradox, satire, allegory)',
            "(F) Analyze/evaluate how the author's diction and syntax contribute to mood, voice, and tone",
            '(G) Analyze/explain the purpose of rhetorical devices and the effect of logical fallacies'
          ],
          note: 'ENG I: "analyze"; ENG II: "analyze"; ENG III: "evaluate"; ENG IV: "critique and evaluate"  -  verb complexity increases each year'
        }
      ],
      coverage: 'Must appear as primary emphasis in at least 5 units per year  -  STAAR priority strand',
      staar: true
    },
    {
      id: 6,
      name: 'Composition',
      short: 'Composition',
      subsections: [
        {
          code: '(c)(9)',
          title: 'Writing process',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Plan a piece of writing  -  brainstorming, journaling, reading, discussing',
            '(B) Develop drafts into focused, structured, coherent writing (timed and open-ended)',
            '(C) Revise drafts for clarity, development, organization, style, diction, sentence effectiveness',
            '(D) Edit drafts using standard English conventions (sentences, verb tense, pronoun agreement, capitalization, punctuation, spelling)',
            '(E) Publish written work for appropriate audiences'
          ],
          note: 'ENG III/IV: "command of standard English conventions using a style guide"  -  more autonomous editing expected'
        },
        {
          code: '(c)(10)',
          title: 'Composition genres',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Compose literary texts such as fiction and poetry using genre characteristics and craft',
            '(B) Compose informational texts  -  explanatory essays, reports, personal essays',
            '(C) Compose argumentative texts using genre characteristics and craft',
            '(D) Compose correspondence in a professional or friendly structure',
            '(E) Compose literary analysis using genre characteristics and craft [ENG III and IV only]',
            '(F) Compose rhetorical analysis using genre characteristics and craft [ENG III and IV only]'
          ],
          note: 'ENG III and IV add (E) literary analysis and (F) rhetorical analysis as required composition types'
        }
      ],
      coverage: 'Present in every unit  -  students write in every unit of ELA',
      staar: false
    },
    {
      id: 7,
      name: 'Inquiry and research',
      short: 'Inquiry',
      subsections: [
        {
          code: '(c)(11)',
          title: 'Inquiry and research',
          domain: 'Listening, speaking, reading, writing, and thinking using multiple texts',
          expectations: [
            '(A) Develop questions for formal and informal inquiry',
            '(B) Critique the research process at each step to implement changes',
            '(C) Develop and revise a research plan',
            '(D) Modify the major research question as necessary to refocus the research plan',
            '(E) Locate relevant sources',
            '(F) Synthesize information from a variety of sources',
            '(G) Examine sources for credibility, bias, omission, and faulty reasoning',
            '(H) Display academic citations and use source materials ethically to avoid plagiarism',
            '(I) Use an appropriate mode of delivery  -  written, oral, or multimodal  -  to present results'
          ],
          note: 'Faulty reasoning examples vary by course: ENG I (ad hominem, loaded language, slippery slope); ENG II (incorrect premise, hasty generalization); ENG III (post hoc, circular reasoning, red herring); ENG IV (straw man, false dilemma, faulty analogies)'
        }
      ],
      coverage: 'Must appear in at least 3 units per year  -  typically anchors research-focused units',
      staar: false
    }
  ],

  // -- COURSE-SPECIFIC FOCUS -------------------------------------------------
  courses: {
    'English I': {
      code: 'S110.36',
      gradeLevel: '9th grade',
      literatureFocus: 'American, British, and world literature',
      keyElements: [
        'Character foils (c)(6)(B)',
        'Non-linear plot structures  -  flashbacks, foreshadowing, subplots, parallel plots (c)(6)(C)',
        'Setting influences theme (c)(6)(D)',
        'Informational and argumentative text analysis introduced',
        'Literary and informational composition',
        'Faulty reasoning: ad hominem, loaded language, slippery slope (c)(11)(G)'
      ],
      compositionFocus: 'Literary, informational, and argumentative texts; correspondence',
      responseLevel: 'Comprehensive response  -  demonstrate understanding',
      craftVerb: 'Analyze'
    },
    'English II': {
      code: 'S110.37',
      gradeLevel: '10th grade',
      literatureFocus: 'World literature across literary periods',
      keyElements: [
        'Archetypes and cultural/historical settings (c)(6)(B)',
        'Isolated scenes and contribution to plot (c)(6)(C)',
        'Comparative themes across cultures (c)(6)(A)',
        'Effects of metrics and rhyme schemes in poetry (c)(7)(B)',
        'Rhetorical devices: appeals, antithesis, parallelism, shifts (c)(8)(G)',
        'Faulty reasoning: incorrect premise, hasty generalizations, either-or (c)(11)(G)'
      ],
      compositionFocus: 'Literary, informational, and argumentative texts; correspondence',
      responseLevel: 'Interpretive response  -  make sense of texts',
      craftVerb: 'Analyze'
    },
    'English III': {
      code: 'S110.38',
      gradeLevel: '11th grade',
      literatureFocus: 'American literature across literary periods',
      keyElements: [
        'Relationships among thematic development, characterization, point of view, setting, plot (c)(6)(A)',
        'Moral dilemmas and their influence on plot and theme (c)(6)(B)',
        'Historical, social, and economic context of setting (c)(6)(D)',
        'Paradox, satire, and allegory as literary devices (c)(8)(E)',
        'Literary analysis and rhetorical analysis as required composition types (c)(10)(E)(F)',
        'Faulty reasoning: post hoc-ad hoc, circular reasoning, red herring, assumptions (c)(11)(G)'
      ],
      compositionFocus: 'Literary, informational, argumentative, literary analysis, rhetorical analysis',
      responseLevel: 'Analytic response  -  analyze texts',
      craftVerb: 'Evaluate'
    },
    'English IV': {
      code: 'S110.39',
      gradeLevel: '12th grade',
      literatureFocus: 'British literature across literary periods',
      keyElements: [
        'Critique and evaluate complex plot structures including subplots (c)(6)(C)',
        'Evaluate historical, social, and economic context of setting (c)(6)(D)',
        'Elements of classical speeches  -  introduction, transitions, body, conclusion, art of persuasion (c)(1)(C)',
        'Paradox, satire, and allegory evaluated for effectiveness (c)(8)(E)',
        'Evaluate diction and syntax for overall text effectiveness (c)(8)(F)',
        'Faulty reasoning: straw man, false dilemma, faulty analogies, non-sequitur (c)(11)(G)'
      ],
      compositionFocus: 'Literary, informational, argumentative, literary analysis, rhetorical analysis',
      responseLevel: 'Evaluative response  -  evaluate and critique texts',
      craftVerb: 'Critique and evaluate'
    }
  },

  // -- METADATA --------------------------------------------------------------
  meta: {
    chapter: '19 TAC Chapter 110, Subchapter C',
    adopted: 'November 12, 2017',
    effectiveDate: '2020-2021 school year',
    lastAmended: 'August 1, 2019 (44 TexReg 3835)',
    source: 'https://tea.texas.gov/sites/default/files/ch110c.pdf',
    nextReview: 'Approximately 2027-2030 (TEKS are reviewed approximately every 10 years)',
    note: 'All seven strands are intended to be integrated for instructional purposes and are recursive in nature. Each strand is of equal value, may be presented in any order, and should be integrated throughout the year.'
  }
};
