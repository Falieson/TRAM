# TSLint

## Prettier

## Ignores
```
/* tslint:disable */                             - Disable all rules for the rest of the file
/* tslint:enable */                              - Enable all rules for the rest of the file
/* tslint:disable:rule1 rule2 rule3... */        - Disable the listed rules for the rest of the file
/* tslint:enable:rule1 rule2 rule3... */         - Enable the listed rules for the rest of the file
// tslint:disable-next-line                      - Disables all rules for the following line
someCode(); // tslint:disable-line               - Disables all rules for the current line
// tslint:disable-next-line:rule1 rule2 rule3... - Disables the listed rules for the next line
```

## Rules
### [strict-boolean-expressions](https://palantir.github.io/tslint/rules/strict-boolean-expressions/)
```text
/*** PrefixUnary Expressions ***/
/*** Invalid ***/
!!numType;
  ~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is a number. Only booleans are allowed.]
!strType;
  ~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is a string. Only booleans are allowed.]
!objType;
  ~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is always truthy. Only booleans are allowed.]
!enumType;
  ~~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is an enum. Only booleans are allowed.]
!!classType;
  ~~~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is always truthy. Only booleans are allowed.]
!bwrapType;
  ~~~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is always truthy. Only booleans are allowed.]
!!undefined;
  ~~~~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is always truthy. Only booleans are allowed.]
  ~~~~~~~~~  [This type is not allowed in the operand for the '!' operator because it is always falsy. Only booleans are allowed.]

/*** Valid ***/
!!boolFn();
!boolExpr;
!!boolType;

/*** If Statement ***/
/*** Invalid ***/
if (numType) { /* statements */ }
    ~~~~~~~                       [This type is not allowed in the 'if' condition because it is a number. Only booleans are allowed.]
if (objType) { /* statements */ }
    ~~~~~~~                       [This type is not allowed in the 'if' condition because it is always truthy. Only booleans are allowed.]
if (strType) { /* statements */ }
    ~~~~~~~                       [This type is not allowed in the 'if' condition because it is a string. Only booleans are allowed.]
if (bwrapType) { /* statements */ }
    ~~~~~~~~~                       [This type is not allowed in the 'if' condition because it is always truthy. Only booleans are allowed.]
if (strFn()) { /* statements */ }
    ~~~~~~~                       [This type is not allowed in the 'if' condition because it is a string. Only booleans are allowed.]
if (MyEnum.A) { /* statements */ }
    ~~~~~~~~                       [This type is not allowed in the 'if' condition because it is an enum. Only booleans are allowed.]
if (classType) { /* statements */ }
    ~~~~~~~~~                       [This type is not allowed in the 'if' condition because it is always truthy. Only booleans are allowed.]
```