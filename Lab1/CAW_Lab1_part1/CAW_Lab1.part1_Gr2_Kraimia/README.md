Lab1_Exo1 - DOM tree and developer tools instructions

Document: lab1_Exo1.html

1) DOM depth

- If we count element nodes only (html, head, body, h1, h2, ul, li, p, img, ...):
  - depth = 4
    - html (1) -> body (2) -> container element like ul/h2/p (3) -> child element like li (4)
- If we include text nodes as nodes in the DOM tree, the deepest level becomes 5
  - text nodes inside paragraphs or list items are one level deeper than their parent element.

2) DOM tree :

html
  head
    meta
    meta
    title
  body
    h1
    h2 (Map)
    img (Map image)
    h2 (Flag)
    img (Flag image)
    h2 (Key Informations)
    ul
      li (Capital)
      li (Area)
      li (Official Language)
      li (Religion)
      li (Main cities)
    h2 (Brief History)
    p
    p
    p

3) Developer tools instructions

- Open the page in your browser (e.g., open `lab1_Exo1.html` in Chrome or Firefox).
- Open Developer Tools (F12 or right-click -> Inspect).
- Use the Elements / Inspector panel to expand the DOM and verify it matches the tree above.
- Modify one heading: double-click the text of any <h2> (for example "Flag") and change it to something else; observe the page update immediately.
- Delete one paragraph: right-click a <p> element in the Elements panel and choose "Delete element"; observe the paragraph disappear from the page.
- Refresh the page to see the original content restored (changes in inspector are temporary).

4) Notes / assumptions

- Image URLs used are public Wikimedia URLs for reliability.
- The file saved is `lab1_Exo1.html` to match the exercise name.
