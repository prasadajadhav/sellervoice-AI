# AccountMail AI — Account Email Classification

An independent learning prototype developed with AI assistance, inspired by the problem of sorting account-management emails. It is not an employer system and uses no company data.

## Problem and solution
Account teams receive billing queries, performance concerns, technical issues and campaign setup requests in the same inbox. This browser demo classifies pasted English emails and suggests the responsible team for human review.

## AI/ML technologies
- JavaScript implementation of multinomial Naive Bayes.
- Bag-of-words text features, lowercase tokenisation and stop-word removal.
- Laplace smoothing and log-space scoring.
- HTML/CSS/JavaScript interface; no external libraries, API keys or paid services.
- ChatGPT-assisted code development and documentation.

The category is learned from labelled examples; the suggested team is a fixed rule applied after prediction. This is not an LLM, generative AI system or automated email integration.

## Try it
Download the files into one folder and open `index.html` in a browser. Select a sample or paste an English account email and click **Classify email**. The demo displays category scores, supporting words and a suggested owner. Input is processed locally and is not saved.

For a public demo, upload all files to the root of a public GitHub repository. In **Settings → Pages**, choose **Deploy from a branch**, **main**, **/(root)** and **Save**. GitHub will display the actual published URL when deployment finishes.

## Training and evaluation
`data.js` contains 48 manually authored synthetic training emails and 16 separately authored synthetic test emails, balanced across four classes. Training happens on page load, using only the training set.

Measured result: **14/16 correct (87.5%)**, with two examples sent to **Needs review**. Abstentions count as incorrect. This is a tiny illustrative synthetic test, not evidence of real-world accuracy or operational impact. The interface shows the full confusion matrix.

With Node.js installed, run `node test.js` to reproduce the evaluation and checks for empty inputs, unknown words, train/test exact-duplicate separation and score normalisation.

## How it works
1. Tokenise the email and remove common stop words.
2. Learn per-category word counts from labelled training examples.
3. Calculate each category's log prior plus smoothed word log likelihoods.
4. Normalise category scores and show the highest scoring category.
5. Request manual review if no known words are found or the top score is below 60%.

Scores are not calibrated probabilities. The 60% threshold is an illustrative choice, not a validated operating threshold. Supporting words compare the winning category's word likelihood against other categories; they are not causal explanations.

## Limitations
Small synthetic dataset; English only; one label per email. Negation, mixed requests, novel vocabulary and domain changes can produce wrong results. No real inbox access, entity extraction, customer database or production validation is included. Next steps: gather permissioned real examples, split by account/thread, evaluate per-class precision/recall, compare TF-IDF models and calibrate scores.

## Files
- `index.html`: browser interface and styling
- `app.js`: interface behaviour and routing suggestions
- `model.js`: training, prediction and evaluation
- `data.js`: auditable training and test examples
- `test.js`: reproducible evaluation and input checks
- `APPLICATION.txt`: application wording and interview explanation
