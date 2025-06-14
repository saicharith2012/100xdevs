# Monorepos and Turborepo

## What are Monorepos?

A Single Repository that holds multiple packages like your frontend, backend, devops code etc.

Few Examples where monorepos are used:

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image.png)

## Why Monorepos?

![alt text](image-3.png)

### When to use Monorepos?

1. **Shared Code Reuse.**

    ![alt text](image-4.png)

    Eg. Zod Types b/w frontend and backend.

2. **Enhanced Collaboration** (b/w teams working on different parts of the code repository.)

3. **Optimised Builds and CI/CD pipelines.**

    - Build can become complicated if they have interdependent packages.

    - Tools like Turborepo offer smart caching and task execution strategies that can significantly reduce build and testing times.

    ![alt text](image-5.png)

4. **Centralized Tooling and Configuration.**

    - Managing *build tools*, *linters*, *formatters*, and other configurations is simpler in a monorepo because you can have
    a single set of tools for the entire project.

![alt text](image-6.png)

## Common Monorepo frameworks in Node.js

![alt text](image-7.png)

![alt text](image-8.png)

## Build system vs Build system orchestrator vs Monorepo framework

### Build system

![alt text](image-9.png)

### Build System Orchestrator

![alt text](image-10.png)

### Monorepo Framework

![alt text](image-11.png)

## Turborepo as a build system orchestrator

![alt text](image-12.png)

![alt text](image-13.png)

>Cloud builds is a benefit from orchestrator like turborepo, where the build images are stored on the cloud, which can be pulled by the CI/CD pipelines when they are needed to be reused in case of build caching.

- Parallelization can be acheived even by using just build systems with scripts that run them parallely.

![alt text](image-15.png)

- But something that's not possible with traditional build systems is **Dependency Graph Awareness**. In this case, the shared reusable code is considered as a different package itself.

![alt text](image-14.png)

- **Turborepo will be aware of this dependency graph**. Such that turborepo prioritises the build processes of different packages on the basis of their dependency on other packages.

>Using an EC2 machine for the build process of a nextjs app can crash the server itself. (Very heavy process.)
