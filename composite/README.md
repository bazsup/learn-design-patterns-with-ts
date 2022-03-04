# Composite Pattern

## Concepts

* Compose objects into tree structures
* Same operations applied on individual and composites
* Examples:
  - java.awt.Component
  - JSF widgets
  - RESTful service GETs

## Design

Tree structured  
Component  
Leaf or Composite, same operations  
Composite knows about child objects  
Component, Left, Composite

## UML Diagram

![](https://www.plantuml.com/plantuml/png/TOz12W8n34NtESLVgj11j-9YOBPU8awZ5jfcQACRyUvAHGSKLmdvd_T8NusBNL8aFbGhF1e6JPDcoOOR0Jf9OGkQ5qkw4usHQyLU-FW_RO0QJ7ug07lVPf6aLsdhIMmuX-XVYDc-Sww9lauVEj4iKlTEMc-BTTUjuB2XNh9_llS0)

## Example

- Menu, MenuItem, MenuComponent

![](https://www.plantuml.com/plantuml/png/bP5D3e8m48NtFSKi8P4B4698N9ce6-C1Aam8INz8ExX1xkvOehR-B5p1UxmtV9EfFKb7erP2dZqvsH3iqOmRgmThq11C0i18ZIKSoVMcOpawzLGiEwG31x8yYh1tSYgnfiSFPY2xkCdtWPyKERCGZPBU1vw0eMCmNyAkzrGbj6lc2VaiHbx5n3adPDjchs7yHcMwTVwckUDGsml-NKjN_LniIwXX-Xe4W7isFKTrBOfG_E67WKi9B5ifJuscvLlV0000)

## Pitfalls

* Can overly simplify system
* Difficult to restrict
* Implmenetation can possibly be costly

## Contrast

Composite
- Tree structure
- Leaf and Composite have smae interface
- Unity between objects

Decorator
- Contains another entity
- Modifies behavior (adds)
- Doesn't change underlying object

## Summary

Composite != Composition