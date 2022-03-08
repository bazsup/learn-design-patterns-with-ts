# Decorator Pattern

## Concepts

* Also called a wrapper
* Add behavior without affecting others
* More than just inheritance
* Single Responsibility Principle
* Compose behavior dynamically
* Examples:
  - java.io.InputStream
  - java.util.Collections#checkedList
  - UI components

## Design Considerations
Inheritance based  
Utilizes composition and   inheritance (is-a, has-a)  
Alternative to subclassing  
Constructor requires instance from hierarchy

## UML Diagram

![](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKhEIImkLd3Epot8pqlDAr6evb9Go2z8BKeioSpFqz3agkM2AybBBafDB4abGgrBQd8-K3I_2An4DnccmmfX4K5haCp0L8jmWqsDhYuMjw6hW9l6nOKmE1ye0LU744Sp4qchGsfU2Z3G0000)

## Example

![](https://www.plantuml.com/plantuml/png/fO-_3e8m4CRtFiKbBX3Z2p0ni3enE9_jgOrjCRqZc1ZVNT1OG_2Fnf6Ft_VhToKBHcczKpO8nGrgWXg3wQpUmKa1p3tkASiBg2NQi5LdfRH3PgYjFpXAxFNBKn3-sCSrIqGj2Qn8Dn6bYIyjCzsoD7x8LdrMfBzAmLIJFUXkHEVl3beIIb807OM2uQdyTbM2VtuFO8763Frd8wf8p7tozP1K-6FCtJ4UL58mhNSN)

## Pitfalss
* New class for every feature added
* Multiple little objects
* Often confused with simple inheritance

## Contrast

Composite
* Tree structure
* Leaf and Composite have same interface
* Unity between objects

Decorator
* Contains another entity
* Modifies behavior (adds)
* Doesn't change underlying object

## Summary
* Original object acan stay the same
* Unique way to add functionality
* Confused with inheritance
* Can be more complex for clients
