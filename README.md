# Boilerplate and Starter for Next JS 14+, Tailwind CSS 3.3 and TypeScript


### Project structure

```shell
.
├── README.md                       # README file
├── __checks__                      # Monitoring as Code, tests run periodically
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── layouts                     # Layouts components
│   ├── libs                        # 3rd party libraries
│   ├── models                      # Database models
│   ├── pages                       # Next JS Pages (page router)
│   ├── pages.test                  # Next JS Pages tests (this avoids tests to be treated as a Next.js pages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

