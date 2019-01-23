## Setup
1. Run `yarn` in the repo root.
1. `cd` into `summing-grid` and run `yarn` to install dependencies.
1. `yarn start` to serve application.

## Submission

### Requirements
1. Implement responsive grid
    1. 4 column default
    1. 2 column < 720px window
    1. 1 column < 360px
1. First three fields should accept a number
1. Last field should display the sum to the nearest 3 digit number

### Extra Credit
1. Validation (handled by Input type="number")
1. Unit tests

### Design Choices
- How data should flow between components
Given the scope of the applicaction, it is not necessary to use Redux.  Only one component needs to maintain state (array of addends).

- Which components could be built to be reusable
FlexContainer was made to be reusable.  The underlying input box could have also been a unit, but I decided to differentiate between the sum and addends for aesthetic reasons.

- How to style the grid so that it's easy to add or remove input cells
Flexbox was used to achieve this easily.  With row-wrap, each addend will be added left-to-right, top-to-bottom, with the sum cell always last.  The width of each cell is increased to 100% on a smaller breakpoint per requirement.  Additional stylistic changes added operators to make the intention of the application obvious (adding numbers).

- How number formatting should handle edge cases
There are several edge cases that must be considered:
1. Numbers that don't have a suffix because they are too large (display scientific notation)
1. Numbers between 0 and 100 (display first three digits, i.e. 9.99)
1. Numbers between 0 and 1 (display appropriate SI units, i.e. milli, micro, ...)
1. Same cases but with negative numbers

### Final Thoughts
- There are places where function creation can be reduced (unnecessary lambdas)
- Edge case logic for the sum should be more concise and readable.  Logic should have been broken down into smaller functions.
- Nav is not really a proper dumb component, but adding examples was an afterthough and purely for convenience
- Original repo should use a newer version of react
