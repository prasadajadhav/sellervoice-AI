# SellerVoice AI

**Seller feedback → human review → product prioritisation → experiment hypothesis.**

[Open the demo](https://prasadajadhav.github.io/account-information-tool/)

An independent AI-assisted portfolio prototype for a B2B marketplace product-management workflow. It is not affiliated with IndiaMART and contains no company or real seller data. This replaces the initial AccountMail AI prototype in the same repository.

## Why this product?
A PM reviewing many feedback entries needs to identify recurring friction, inspect evidence, and decide what to investigate. Classification alone does not answer that question. SellerVoice combines learned text categorisation with editable assumptions and traceable feedback.

## Demo walkthrough
1. Open `index.html` locally or the deployed demo. 24 fictional feedback entries load immediately.
2. Explore five themes: lead relevance, buyer responsiveness, onboarding/catalogue, subscription/billing and app reliability.
3. Filter by seller segment or click a theme to inspect feedback.
4. Confirm a label or correct it; adjust severity. The dashboard updates immediately.
5. Change an effort estimate to explore how priority ranking changes.
6. Read the leading investigation hypothesis, proposed metric and guardrails.
7. Add a batch of feedback (one per line) and export the reviewed dataset as CSV.

Data and edits remain in memory only. Reloading resets the workspace; export before leaving. CSV export includes all entries, even when a filter is active. Input is not transmitted to an API.

## What uses AI/ML?
`model.js` implements multinomial Naive Bayes in JavaScript. It learns category word frequencies from 60 labelled synthetic examples, using lowercase tokenisation, stop-word removal, bag-of-words features, Laplace smoothing and log-space scoring. It returns category scores and indicative supporting terms.

**Not ML:** severity, effort, priority ranking and experiment suggestions. These are user inputs, arithmetic and authored hypotheses. Corrections update the workspace but do not retrain the model. ChatGPT assisted implementation and documentation.

A score below 60%, or no known vocabulary, results in `Needs review`. This threshold is illustrative; scores are uncalibrated, not reliable confidence estimates. One theme is assigned per entry. The review counter includes all entries not yet confirmed by a human.

## Prioritisation method
`score = 100 × (theme entries / all entries in selected segment) × average severity / effort`

Severity: 1 minor, 2 friction, 3 blocker. Effort: relative units 1–10. New feedback defaults to severity 2 for review. Sample severity and initial effort are fictional assumptions. Needs-review entries remain in the denominator but are not ranked. Frequency counts entries, not unique sellers. Duplicates are removed by exact case-insensitive text on batch input; semantically similar duplicates are not detected. This is a transparent discussion aid, not validated RICE, ROI, causal inference or a roadmap commitment.

## Evaluation and reproducibility
- Training: 60 authored synthetic examples, 12 per class.
- Test: 20 separately authored synthetic examples, four per class, no exact training duplicates.
- Result: 19/20 correct (95%); one app-reliability example abstained. Abstention counts as incorrect.
- Majority-class baseline: 20% on this balanced test.
- Run `node test.js` (Node.js required) to reproduce the confusion matrix and input checks.
- The sample dashboard intentionally reuses training examples to demonstrate controls; it is not an evaluation set.

The test set is small, synthetic and authored in the same style as training data. It does not demonstrate real-world generalisation. The model was not validated against actual marketplace feedback, a user study or a production system. No time saving, revenue lift or seller-retention improvement is claimed.

## Product validation plan (not yet conducted)
Interview five product/operations users to test the workflow. Gather permissioned feedback with independent labels; split by seller/thread to reduce leakage. Compare manual and assisted triage time, correction rates, per-class precision/recall and abstention coverage. Compare a TF-IDF baseline, test score calibration and include multilingual/mixed-theme examples. Validate each proposed product intervention separately with guardrails.

## Limitations
English only; weak handling of negation, mixed issues, synonyms, spam and unseen domains. Novel inputs can receive incorrect high scores. No seller identifiers, unique-user reach, time trends, real inbox integration, persistence, authentication, database, API or automatic retraining. Illustrative categories are hypotheses, not research findings about IndiaMART.

## Files and hosting
`index.html`, `styles.css`, `data.js`, `model.js`, `app.js` comprise the dependency-free static demo. `test.js` reproduces model checks. `APPLICATION.txt` includes form wording and interview preparation. `GITHUB_UPDATE.txt` explains uploading the replacement files.

Upload all files to the existing repository root on `main`. Keep GitHub Pages set to `main` and `/(root)`. No build command, API key or package installation is required to run the demo.
