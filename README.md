# <a href="https://password.caionunes.dev" target="_blank">Password Generator</a>

A simple but useful Password Generator I've created some time ago as one of the projects from the Javascript course I was running at the time. Recently I decided to rewrite the code and add some features.

##

Um gerador de senhas simples mas muito útil que criei um tempo atrás como um dos projetos do curso de Javascript que eu estava fazendo na época. Recentemente decidi reescrever o código e adicionar algumas features.

##

```mermaid

	graph TD
		concept{{Concept}}
		workaround{{Workaround}}
		


		standalone-theme([Standalone theme])
		standalone-development([Development end])
		primary-structure[Primary structure]
		customize-features[Customize features]
		backup[(Backup)]
		fork[/Git clone/]
		


		rainmaker-learning[Learn Rainmaker]
		genesis-learning[/Genesis framework/]
		code-adaption((Code adaption))
		platform-custom-code[/Platform code/]
		


		ct-rmkr{{Custom Theme for Rainmaker}}
		ct-rmkr-dev([Development])
		ct-rmkr-devend([Development end])
		ct-rmkr-review((Project review))
		



		
		concept ------------- ct-rmkr


		workaround
            standalone-theme
                workaround             --->  standalone-theme
                standalone-theme       ---   primary-structure
                standalone-theme       ---   customize-features
                primary-structure      ---   standalone-development
                customize-features     ---   standalone-development
                standalone-development ---   backup
                standalone-development ----- fork
                fork                   -->   code-adaption
            code-adaption
    
            rainmaker-learning
                workaround             ---> rainmaker-learning
                rainmaker-learning     ---  genesis-learning
                rainmaker-learning     ---  platform-custom-code
                platform-custom-code   ---> code-adaption
                genesis-learning       ---> code-adaption
            code-adaption

            code-adaption ----
		ct-rmkr


		ct-rmkr
            ct-rmkr --- ct-rmkr-dev
            
            ct-rmkr-dev       ---    ct-rmkr-fixes
            
            ct-rmkr-fixes     -->    ct-rmkr-bugs
            ct-rmkr-bugs      ---    ct-rmkr-optimization --- ct-rmkr-organize
            ct-rmkr-fixes     -----> ct-rmkr-review
            
            ct-rmkr-dev       ---    ct-rmkr-features
            ct-rmkr-features  -----> ct-rmkr-review
            ct-rmkr-features  -->    ct-rmkr-customize
            ct-rmkr-customize ---    ct-rmkr-integrations
		ct-rmkr-review
		

		ct-rmkr-review
            ct-rmkr-review --- ct-rmkr-devend
            ct-rmkr-review --- ct-rmkr-documentation

```
