# Bridge

## Concept
* Decouple abstraction and implementation
* Encapsulation, Composition, Inheritance
* Changes in abstraction won't affect client
* Details won't be right
* Examples:
  - Driver
  - JDBC

## Design

Composition over Inheritance
More than composition
Expect change from both sides

## UML Diagram

![](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCAYufIamkKN24CZBpynIgkHGKyWjIYn91F0rDhbekXBgWrBJClDGK9EL8afwv1JcfkQbv9Vb5g8Q092069USa5XShEEVd9HUb9fQa8kbmnAu5ZmudN9OWkyEcHbSNktt4ANFY0W4a_qAKOeO3cY9TvD3WSaZDIm66Dm00)

## Problem

Overused of inheritance

![](https://www.plantuml.com/plantuml/png/LOmn3i8m34Ltdy8Z3Bq1GqK7TZY1IIs1vBR1IGPKUdS6rseo-lcztwTCciiaGC-KbKB6nuiYumg8gxCDAKRv3eiiUZh3TiZ3MuDm5NyAAGFOoENNTQvKn2K8GYdXLGgRj8CxZxjYzqsPPu_CjA6gjBTXxrlQhFGyZsMIFm00)

## Example

Shape

![](https://www.plantuml.com/plantuml/png/ZKzB3e903Dtt54tSW8GB61T4RY0dgCCOISh7pip287SNAIOaJgBBr_TvhuNp93wq34tdhLp9M2nxxWL7G1pfuhoGyHFICF1ZOP8K9Z1Cpk69Wrs4KVPiwnW9cdzyvlaIiCMp1G0-hLZTQD22dNcB3hfjnfbooVQS_h6uRCImHcOAlZBYnkeUI5QZWfz6qFdxN1KhraUrUdlHJ2XiLuUMNm00)

Movie Printer

![](https://www.plantuml.com/plantuml/png/hL71JiCm3BtdAonnQH5LxsL2Eo2q0qX8-mAlTKUaf4M9EmcD_Jiu8JITO5mujNxFUS_FNdj6nvCrgZNeFTmJepPmL02LmHsP1hRizB2_5UI0Pg8P-OJg6lR4JAxsuLEKwgIK7fXSZot1m-Wi2X4a-r0LBuGTkGPyqBc1BfWsyAWzh-84TsMo4RquszDuq1H72u3kTOkino6r2kEcWRMb76BDPW6y4RfK_nuYCtrs8L7qje8qaP3NUKUHawK2qTs4jCKSAA0nfXSuZot6kFFii6N8RL_bl-ZJEfjviwKCSKoFJd3risVUST4_1e_c5y-tNPpF_tc_3LlpJu9fCwltgbeSGEK5N7-Ht_rZDUyj1wE7YbmIFbl16RkCezOqT9Cr7m00)

## Pitfalls

* Increase complexity
* Conceptually difficult to plan
* More than just OO

## Contrast

Bridge
* Design upfront
* Abstraction and implementation vary
* Built in advance
* Complex

Adapater
* Works after code is designed
* Legacy
* Retrofitted
* Provides differnt interface