export type SurveyValue = [number, number];

export type SurveyOption = {
  Text: string;
  Values: SurveyValue[];
}

export type SurveyChoices = SurveyOption[];

export type SurveyQuestion = {
  Question: string;
  Options: SurveyOption[];
};

export type SurveyType = SurveyQuestion[];

export const Survey: SurveyType = [
  {
    Question: "Você lida bem com números e símbolos e suas manipulações?",
    Options: [
      {
        Text: "Não. Tenho dificuldade, mas gostaria de me desafiar.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [60, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [60, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [20, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [60, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [60, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [70, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [70, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [70, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [50, 40], //Bacharelado em Engenharia - Telecomunicações
          [50, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [70, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [70, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [10, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [10, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Não tenho interesse nisso.",
        Values: [
          [80, 1], //Bacharelado em Enfermagem
          [100, 2], //Bacharelado em Fisioterapia
          [100, 3], //Bacharelado em Nutrição
          [90, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [100, 6], //Licenciatura em História
          [100, 7], //Licenciatura em Letras Português/Espanhol
          [100, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [100, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [20, 13], //Licenciatura em Matemática
          [70, 14], //Licenciatura em Ciências Biológicas
          [100, 15], //Licenciatura em Letras Português/Inglês
          [100, 16], //Licenciatura em Letras Português/Espanhol
          [100, 17], //Licenciatura em Pedagogia
          [30, 18], //Superior de Tecnologia em Logística
          [20, 19], //Bacharelado em Engenharia de Software
          [80, 20], //Bacharelado em Medicina
          [100, 21], //Bacharelado em Psicologia
          [70, 22], //Licenciatura em Ciências Biológicas
          [30, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [100, 25], //Licenciatura em História
          [100, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [60, 29], //Superior de Tecnologia em Logística
          [100, 30], //Bacharelado em Serviços Sociais
          [90, 31], //Bacharelado em Direito
          [90, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [90, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [20, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [40, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [90, 44], //Bacharelado em Direito
          [100, 45], //Bacharelado em Odontologia
          [20, 46], //Bacharelado em Sistemas de Informação
          [10, 47], //Bacharelado em Administração
          [90, 48], //Bacharelado em Medicina
          [100, 49], //Bacharelado em Saúde Coletiva
          [100, 50], //Licenciatura em Educação Física
          [90, 51], //Bacharelado em Educação Física
          [80, 52], //Bacharelado em Ciências Biológicas
          [100, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Me identifico muito com números e símbolos.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [90, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [100, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [80, 12], //Licenciatura em Geografia
          [100, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [80, 18], //Superior de Tecnologia em Logística
          [90, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [30, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [80, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [100, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [80, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [90, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [90, 35], //Bacharelado em Engenharia Civil
          [80, 36], //Bacharelado em Engenharia da Computação
          [80, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [70, 40], //Bacharelado em Engenharia - Telecomunicações
          [60, 41], //Bacharelado em Física de Materiais
          [90, 42], //Bacharelado em Mecânica Industrial
          [80, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [90, 46], //Bacharelado em Sistemas de Informação
          [80, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [10, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [10, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém pretendo estudar outras coisas.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [40, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [50, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [40, 18], //Superior de Tecnologia em Logística
          [70, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [20, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [50, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [70, 33], //Bacharelado em Administração
          [10, 34], //Bacharelado em Medicina
          [50, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [70, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [70, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [40, 40], //Bacharelado em Engenharia - Telecomunicações
          [50, 41], //Bacharelado em Física de Materiais
          [60, 42], //Bacharelado em Mecânica Industrial
          [70, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [50, 46], //Bacharelado em Sistemas de Informação
          [70, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [10, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [10, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Mais ou menos.",
        Values: [
          [70, 1], //Bacharelado em Enfermagem
          [80, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [80, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [80, 6], //Licenciatura em História
          [90, 7], //Licenciatura em Letras Português/Espanhol
          [90, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [60, 10], //Licenciatura em Pedagogia
          [80, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [20, 13], //Licenciatura em Matemática
          [80, 14], //Licenciatura em Ciências Biológicas
          [90, 15], //Licenciatura em Letras Português/Inglês
          [90, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [30, 18], //Superior de Tecnologia em Logística
          [20, 19], //Bacharelado em Engenharia de Software
          [80, 20], //Bacharelado em Medicina
          [60, 21], //Bacharelado em Psicologia
          [80, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [80, 25], //Licenciatura em História
          [90, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [60, 28], //Licenciatura em Pedagogia
          [30, 29], //Superior de Tecnologia em Logística
          [90, 30], //Bacharelado em Serviços Sociais
          [60, 31], //Bacharelado em Direito
          [70, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [80, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [40, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [40, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [50, 40], //Bacharelado em Engenharia - Telecomunicações
          [40, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [70, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [80, 48], //Bacharelado em Medicina
          [90, 49], //Bacharelado em Saúde Coletiva
          [70, 50], //Licenciatura em Educação Física
          [70, 51], //Bacharelado em Educação Física
          [80, 52], //Bacharelado em Ciências Biológicas
          [70, 53], //Bacharelado em Enfermagem
          [90, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Organizar documentos, planejar tarefas e criar processos é fácil para você?",
    Options: [
      {
        Text: "Não. Tenho dificuldades quanto a isto.",
        Values: [
          [45, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [45, 3], //Bacharelado em Nutrição
          [35, 4], //Licenciatura em Ciências Biológicas
          [40, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [45, 7], //Licenciatura em Letras Português/Espanhol
          [40, 8], //Licenciatura em Letras Português/Inglês
          [40, 9], //Licenciatura em Matemática
          [45, 10], //Licenciatura em Pedagogia
          [40, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [35, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [40, 15], //Licenciatura em Letras Português/Inglês
          [35, 16], //Licenciatura em Letras Português/Espanhol
          [45, 17], //Licenciatura em Pedagogia
          [35, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [45, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [25, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [45, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [35, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [40, 32], //Bacharelado em Odontologia
          [35, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [45, 35], //Bacharelado em Engenharia Civil
          [40, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [25, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [20, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [45, 42], //Bacharelado em Mecânica Industrial
          [10, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [35, 45], //Bacharelado em Odontologia
          [45, 46], //Bacharelado em Sistemas de Informação
          [10, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [35, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [25, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Porém gosto muito.",
        Values: [
          [15, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [45, 4], //Licenciatura em Ciências Biológicas
          [40, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [45, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [45, 10], //Licenciatura em Pedagogia
          [40, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [45, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [40, 15], //Licenciatura em Letras Português/Inglês
          [45, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [75, 18], //Superior de Tecnologia em Logística
          [25, 19], //Bacharelado em Engenharia de Software
          [15, 20], //Bacharelado em Medicina
          [25, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [45, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [35, 25], //Licenciatura em História
          [45, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [40, 28], //Licenciatura em Pedagogia
          [80, 29], //Superior de Tecnologia em Logística
          [15, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [85, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [25, 35], //Bacharelado em Engenharia Civil
          [15, 36], //Bacharelado em Engenharia da Computação
          [25, 37], //Bacharelado em Engenharia de Controle e Automação
          [20, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [25, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [15, 41], //Bacharelado em Física de Materiais
          [25, 42], //Bacharelado em Mecânica Industrial
          [75, 43], //Bacharelado em Administração de Empresas
          [70, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [35, 46], //Bacharelado em Sistemas de Informação
          [80, 47], //Bacharelado em Administração
          [25, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [45, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Entretanto acho cansativo.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [35, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [15, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [35, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [35, 10], //Licenciatura em Pedagogia
          [15, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [35, 13], //Licenciatura em Matemática
          [25, 14], //Licenciatura em Ciências Biológicas
          [15, 15], //Licenciatura em Letras Português/Inglês
          [35, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [75, 18], //Superior de Tecnologia em Logística
          [25, 19], //Bacharelado em Engenharia de Software
          [15, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [35, 22], //Licenciatura em Ciências Biológicas
          [15, 23], //Licenciatura em Computação
          [35, 24], //Licenciatura em Geografia
          [40, 25], //Licenciatura em História
          [25, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [35, 28], //Licenciatura em Pedagogia
          [80, 29], //Superior de Tecnologia em Logística
          [15, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [75, 33], //Bacharelado em Administração
          [25, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [15, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [15, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [65, 43], //Bacharelado em Administração de Empresas
          [85, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [75, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [25, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [35, 51], //Bacharelado em Educação Física
          [15, 52], //Bacharelado em Ciências Biológicas
          [25, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [15, 2], //Bacharelado em Fisioterapia
          [25, 3], //Bacharelado em Nutrição
          [55, 4], //Licenciatura em Ciências Biológicas
          [60, 5], //Licenciatura em Geografia
          [50, 6], //Licenciatura em História
          [55, 7], //Licenciatura em Letras Português/Espanhol
          [60, 8], //Licenciatura em Letras Português/Inglês
          [55, 9], //Licenciatura em Matemática
          [65, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [55, 12], //Licenciatura em Geografia
          [45, 13], //Licenciatura em Matemática
          [55, 14], //Licenciatura em Ciências Biológicas
          [60, 15], //Licenciatura em Letras Português/Inglês
          [55, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [100, 18], //Superior de Tecnologia em Logística
          [25, 19], //Bacharelado em Engenharia de Software
          [15, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [65, 22], //Licenciatura em Ciências Biológicas
          [55, 23], //Licenciatura em Computação
          [60, 24], //Licenciatura em Geografia
          [55, 25], //Licenciatura em História
          [65, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [55, 27], //Licenciatura em Matemática
          [50, 28], //Licenciatura em Pedagogia
          [100, 29], //Superior de Tecnologia em Logística
          [15, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [100, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [15, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [25, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [25, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [35, 42], //Bacharelado em Mecânica Industrial
          [100, 43], //Bacharelado em Administração de Empresas
          [100, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [25, 46], //Bacharelado em Sistemas de Informação
          [100, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [10, 49], //Bacharelado em Saúde Coletiva
          [65, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [70, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Mais ou menos. Depende da atividade.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [15, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [25, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [35, 7], //Licenciatura em Letras Português/Espanhol
          [25, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [35, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [25, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [15, 15], //Licenciatura em Letras Português/Inglês
          [40, 16], //Licenciatura em Letras Português/Espanhol
          [35, 17], //Licenciatura em Pedagogia
          [55, 18], //Superior de Tecnologia em Logística
          [15, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [35, 22], //Licenciatura em Ciências Biológicas
          [30, 23], //Licenciatura em Computação
          [25, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [35, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [65, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [15, 32], //Bacharelado em Odontologia
          [60, 33], //Bacharelado em Administração
          [25, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [15, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [24, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [35, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [25, 42], //Bacharelado em Mecânica Industrial
          [55, 43], //Bacharelado em Administração de Empresas
          [70, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [20, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [15, 49], //Bacharelado em Saúde Coletiva
          [35, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [35, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Você gosta de aprender e ensinar seus conhecimentos?",
    Options: [
      {
        Text: "Não. Me considero mais individualista.",
        Values: [
          [35, 1], //Bacharelado em Enfermagem
          [15, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [15, 4], //Licenciatura em Ciências Biológicas
          [20, 5], //Licenciatura em Geografia
          [15, 6], //Licenciatura em História
          [25, 7], //Licenciatura em Letras Português/Espanhol
          [15, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [15, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [15, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [25, 15], //Licenciatura em Letras Português/Inglês
          [15, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [35, 18], //Superior de Tecnologia em Logística
          [45, 19], //Bacharelado em Engenharia de Software
          [35, 20], //Bacharelado em Medicina
          [40, 21], //Bacharelado em Psicologia
          [15, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [15, 24], //Licenciatura em Geografia
          [25, 25], //Licenciatura em História
          [15, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [30, 28], //Licenciatura em Pedagogia
          [45, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [35, 32], //Bacharelado em Odontologia
          [30, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [35, 35], //Bacharelado em Engenharia Civil
          [40, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [45, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [25, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [35, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [35, 47], //Bacharelado em Administração
          [25, 48], //Bacharelado em Medicina
          [35, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [15, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Não tenho facilidade com isto.",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [35, 3], //Bacharelado em Nutrição
          [15, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [25, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [25, 8], //Licenciatura em Letras Português/Inglês
          [15, 9], //Licenciatura em Matemática
          [25, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [35, 13], //Licenciatura em Matemática
          [25, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [25, 16], //Licenciatura em Letras Português/Espanhol
          [15, 17], //Licenciatura em Pedagogia
          [45, 18], //Superior de Tecnologia em Logística
          [40, 19], //Bacharelado em Engenharia de Software
          [35, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [25, 22], //Licenciatura em Ciências Biológicas
          [15, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [25, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [40, 28], //Licenciatura em Pedagogia
          [45, 29], //Superior de Tecnologia em Logística
          [40, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [40, 32], //Bacharelado em Odontologia
          [35, 33], //Bacharelado em Administração
          [45, 34], //Bacharelado em Medicina
          [35, 35], //Bacharelado em Engenharia Civil
          [35, 36], //Bacharelado em Engenharia da Computação
          [30, 37], //Bacharelado em Engenharia de Controle e Automação
          [25, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [25, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [25, 44], //Bacharelado em Direito
          [35, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [40, 47], //Bacharelado em Administração
          [35, 48], //Bacharelado em Medicina
          [40, 49], //Bacharelado em Saúde Coletiva
          [25, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém tenho dificuldade para passar o conhecimento.",
        Values: [
          [30, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [35, 3], //Bacharelado em Nutrição
          [60, 4], //Licenciatura em Ciências Biológicas
          [70, 5], //Licenciatura em Geografia
          [65, 6], //Licenciatura em História
          [75, 7], //Licenciatura em Letras Português/Espanhol
          [65, 8], //Licenciatura em Letras Português/Inglês
          [80, 9], //Licenciatura em Matemática
          [65, 10], //Licenciatura em Pedagogia
          [60, 11], //Licenciatura em História
          [70, 12], //Licenciatura em Geografia
          [65, 13], //Licenciatura em Matemática
          [70, 14], //Licenciatura em Ciências Biológicas
          [75, 15], //Licenciatura em Letras Português/Inglês
          [65, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [65, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [70, 24], //Licenciatura em Geografia
          [65, 25], //Licenciatura em História
          [75, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [70, 27], //Licenciatura em Matemática
          [75, 28], //Licenciatura em Pedagogia
          [25, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [35, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [25, 35], //Bacharelado em Engenharia Civil
          [20, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [25, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [25, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [35, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [40, 47], //Bacharelado em Administração
          [35, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [75, 50], //Licenciatura em Educação Física
          [35, 51], //Bacharelado em Educação Física
          [25, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [75, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Entretanto ensino apenas quando solicitado.",
        Values: [
          [30, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [25, 3], //Bacharelado em Nutrição
          [80, 4], //Licenciatura em Ciências Biológicas
          [85, 5], //Licenciatura em Geografia
          [70, 6], //Licenciatura em História
          [75, 7], //Licenciatura em Letras Português/Espanhol
          [85, 8], //Licenciatura em Letras Português/Inglês
          [90, 9], //Licenciatura em Matemática
          [70, 10], //Licenciatura em Pedagogia
          [75, 11], //Licenciatura em História
          [85, 12], //Licenciatura em Geografia
          [70, 13], //Licenciatura em Matemática
          [80, 14], //Licenciatura em Ciências Biológicas
          [85, 15], //Licenciatura em Letras Português/Inglês
          [90, 16], //Licenciatura em Letras Português/Espanhol
          [70, 17], //Licenciatura em Pedagogia
          [40, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [35, 20], //Bacharelado em Medicina
          [25, 21], //Bacharelado em Psicologia
          [85, 22], //Licenciatura em Ciências Biológicas
          [70, 23], //Licenciatura em Computação
          [85, 24], //Licenciatura em Geografia
          [80, 25], //Licenciatura em História
          [75, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [90, 27], //Licenciatura em Matemática
          [80, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [35, 32], //Bacharelado em Odontologia
          [30, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [25, 35], //Bacharelado em Engenharia Civil
          [35, 36], //Bacharelado em Engenharia da Computação
          [30, 37], //Bacharelado em Engenharia de Controle e Automação
          [40, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [20, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [35, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [25, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [35, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [45, 46], //Bacharelado em Sistemas de Informação
          [35, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [25, 49], //Bacharelado em Saúde Coletiva
          [85, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [90, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Sempre ajudo meus colegas.",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [35, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [100, 5], //Licenciatura em Geografia
          [100, 6], //Licenciatura em História
          [100, 7], //Licenciatura em Letras Português/Espanhol
          [100, 8], //Licenciatura em Letras Português/Inglês
          [100, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [100, 11], //Licenciatura em História
          [100, 12], //Licenciatura em Geografia
          [100, 13], //Licenciatura em Matemática
          [100, 14], //Licenciatura em Ciências Biológicas
          [100, 15], //Licenciatura em Letras Português/Inglês
          [100, 16], //Licenciatura em Letras Português/Espanhol
          [100, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [35, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [100, 24], //Licenciatura em Geografia
          [100, 25], //Licenciatura em História
          [100, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [100, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [25, 32], //Bacharelado em Odontologia
          [35, 33], //Bacharelado em Administração
          [40, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [25, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [40, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [35, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [25, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [25, 46], //Bacharelado em Sistemas de Informação
          [35, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [40, 49], //Bacharelado em Saúde Coletiva
          [100, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Utilizar a criatividade faz parte da sua vida?",
    Options: [
      {
        Text: "Não. Não me considero criativo(a).",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [25, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [25, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [35, 9], //Licenciatura em Matemática
          [19, 10], //Licenciatura em Pedagogia
          [25, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [40, 14], //Licenciatura em Ciências Biológicas
          [35, 15], //Licenciatura em Letras Português/Inglês
          [40, 16], //Licenciatura em Letras Português/Espanhol
          [35, 17], //Licenciatura em Pedagogia
          [10, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [35, 20], //Bacharelado em Medicina
          [40, 21], //Bacharelado em Psicologia
          [25, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [25, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [35, 27], //Licenciatura em Matemática
          [40, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [40, 33], //Bacharelado em Administração
          [35, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [35, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [25, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [35, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [30, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [35, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [10, 51], //Bacharelado em Educação Física
          [25, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Até sou criativo mas não gosto de demonstrar.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [40, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [55, 4], //Licenciatura em Ciências Biológicas
          [45, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [25, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [40, 9], //Licenciatura em Matemática
          [15, 10], //Licenciatura em Pedagogia
          [45, 11], //Licenciatura em História
          [25, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [45, 15], //Licenciatura em Letras Português/Inglês
          [40, 16], //Licenciatura em Letras Português/Espanhol
          [25, 17], //Licenciatura em Pedagogia
          [10, 18], //Superior de Tecnologia em Logística
          [15, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [35, 25], //Licenciatura em História
          [45, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [15, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [15, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [15, 34], //Bacharelado em Medicina
          [15, 35], //Bacharelado em Engenharia Civil
          [20, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [15, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [20, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [15, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [45, 43], //Bacharelado em Administração de Empresas
          [35, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [15, 46], //Bacharelado em Sistemas de Informação
          [45, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [25, 49], //Bacharelado em Saúde Coletiva
          [45, 50], //Licenciatura em Educação Física
          [35, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [50, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém não sou muito bom nisso.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [15, 3], //Bacharelado em Nutrição
          [25, 4], //Licenciatura em Ciências Biológicas
          [20, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [15, 7], //Licenciatura em Letras Português/Espanhol
          [25, 8], //Licenciatura em Letras Português/Inglês
          [15, 9], //Licenciatura em Matemática
          [60, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [25, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [15, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [25, 17], //Licenciatura em Pedagogia
          [55, 18], //Superior de Tecnologia em Logística
          [65, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [25, 21], //Bacharelado em Psicologia
          [35, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [15, 24], //Licenciatura em Geografia
          [25, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [50, 28], //Licenciatura em Pedagogia
          [55, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [15, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [55, 36], //Bacharelado em Engenharia da Computação
          [30, 37], //Bacharelado em Engenharia de Controle e Automação
          [55, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [60, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [70, 40], //Bacharelado em Engenharia - Telecomunicações
          [60, 41], //Bacharelado em Física de Materiais
          [65, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [15, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [70, 46], //Bacharelado em Sistemas de Informação
          [30, 47], //Bacharelado em Administração
          [15, 48], //Bacharelado em Medicina
          [10, 49], //Bacharelado em Saúde Coletiva
          [65, 50], //Licenciatura em Educação Física
          [55, 51], //Bacharelado em Educação Física
          [25, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [70, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. A criatividade é um dos meus pontos fortes.",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [45, 3], //Bacharelado em Nutrição
          [40, 4], //Licenciatura em Ciências Biológicas
          [55, 5], //Licenciatura em Geografia
          [45, 6], //Licenciatura em História
          [60, 7], //Licenciatura em Letras Português/Espanhol
          [55, 8], //Licenciatura em Letras Português/Inglês
          [40, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [60, 12], //Licenciatura em Geografia
          [40, 13], //Licenciatura em Matemática
          [55, 14], //Licenciatura em Ciências Biológicas
          [45, 15], //Licenciatura em Letras Português/Inglês
          [60, 16], //Licenciatura em Letras Português/Espanhol
          [65, 17], //Licenciatura em Pedagogia
          [100, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [40, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [50, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [55, 24], //Licenciatura em Geografia
          [60, 25], //Licenciatura em História
          [40, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [55, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [100, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [45, 31], //Bacharelado em Direito
          [35, 32], //Bacharelado em Odontologia
          [40, 33], //Bacharelado em Administração
          [50, 34], //Bacharelado em Medicina
          [100, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [45, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [100, 40], //Bacharelado em Engenharia - Telecomunicações
          [100, 41], //Bacharelado em Física de Materiais
          [100, 42], //Bacharelado em Mecânica Industrial
          [40, 43], //Bacharelado em Administração de Empresas
          [45, 44], //Bacharelado em Direito
          [55, 45], //Bacharelado em Odontologia
          [100, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [45, 49], //Bacharelado em Saúde Coletiva
          [100, 50], //Licenciatura em Educação Física
          [100, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas quero algo objetivo no momento.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [40, 2], //Bacharelado em Fisioterapia
          [45, 3], //Bacharelado em Nutrição
          [25, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [40, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [70, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [40, 13], //Licenciatura em Matemática
          [25, 14], //Licenciatura em Ciências Biológicas
          [35, 15], //Licenciatura em Letras Português/Inglês
          [45, 16], //Licenciatura em Letras Português/Espanhol
          [15, 17], //Licenciatura em Pedagogia
          [80, 18], //Superior de Tecnologia em Logística
          [75, 19], //Bacharelado em Engenharia de Software
          [45, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [45, 22], //Licenciatura em Ciências Biológicas
          [85, 23], //Licenciatura em Computação
          [20, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [35, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [75, 28], //Licenciatura em Pedagogia
          [70, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [45, 31], //Bacharelado em Direito
          [35, 32], //Bacharelado em Odontologia
          [25, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [65, 35], //Bacharelado em Engenharia Civil
          [70, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [75, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [80, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [80, 40], //Bacharelado em Engenharia - Telecomunicações
          [75, 41], //Bacharelado em Física de Materiais
          [70, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [35, 45], //Bacharelado em Odontologia
          [70, 46], //Bacharelado em Sistemas de Informação
          [25, 47], //Bacharelado em Administração
          [45, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [75, 50], //Licenciatura em Educação Física
          [65, 51], //Bacharelado em Educação Física
          [45, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [85, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Gosta de criar novas tecnologias e desenvolver sistemas inteligentes?",
    Options: [
      {
        Text: "Não. Não tenho interesse nisso.",
        Values: [
          [30, 1], //Bacharelado em Enfermagem
          [35, 2], //Bacharelado em Fisioterapia
          [40, 3], //Bacharelado em Nutrição
          [35, 4], //Licenciatura em Ciências Biológicas
          [45, 5], //Licenciatura em Geografia
          [50, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [35, 8], //Licenciatura em Letras Português/Inglês
          [45, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [35, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [45, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [50, 15], //Licenciatura em Letras Português/Inglês
          [40, 16], //Licenciatura em Letras Português/Espanhol
          [35, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [35, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [15, 23], //Licenciatura em Computação
          [45, 24], //Licenciatura em Geografia
          [50, 25], //Licenciatura em História
          [55, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [35, 28], //Licenciatura em Pedagogia
          [25, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [40, 32], //Bacharelado em Odontologia
          [45, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [15, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [25, 37], //Bacharelado em Engenharia de Controle e Automação
          [20, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [40, 43], //Bacharelado em Administração de Empresas
          [45, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [15, 46], //Bacharelado em Sistemas de Informação
          [35, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [35, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [45, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [50, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociai
        ]
      },
      {
        Text: "Não. Porém pretendo me desafiar.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [15, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [25, 6], //Licenciatura em História
          [15, 7], //Licenciatura em Letras Português/Espanhol
          [25, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [15, 10], //Licenciatura em Pedagogia
          [25, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [15, 14], //Licenciatura em Ciências Biológicas
          [25, 15], //Licenciatura em Letras Português/Inglês
          [25, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [35, 18], //Superior de Tecnologia em Logística
          [55, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [25, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [15, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [15, 27], //Licenciatura em Matemática
          [25, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [15, 34], //Bacharelado em Medicina
          [45, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [55, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [25, 43], //Bacharelado em Administração de Empresas
          [15, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [65, 46], //Bacharelado em Sistemas de Informação
          [25, 47], //Bacharelado em Administração
          [10, 48], //Bacharelado em Medicina
          [15, 49], //Bacharelado em Saúde Coletiva
          [25, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [40, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociai
        ]
      },
      {
        Text: "Sim. Mas não quero isto no momento.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [40, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [25, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [15, 9], //Licenciatura em Matemática
          [30, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [25, 12], //Licenciatura em Geografia
          [40, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [30, 15], //Licenciatura em Letras Português/Inglês
          [35, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [55, 23], //Licenciatura em Computação
          [20, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [35, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [15, 27], //Licenciatura em Matemática
          [30, 28], //Licenciatura em Pedagogia
          [65, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [35, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [55, 35], //Bacharelado em Engenharia Civil
          [65, 36], //Bacharelado em Engenharia da Computação
          [70, 37], //Bacharelado em Engenharia de Controle e Automação
          [50, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [55, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [55, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [40, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [30, 47], //Bacharelado em Administração
          [35, 48], //Bacharelado em Medicina
          [40, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [65, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [25, 54] //Licenciatura em Ciências Sociai
        ]
      },
      {
        Text: "Sim. Tenho facilidade com isso.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [15, 4], //Licenciatura em Ciências Biológicas
          [25, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [15, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [25, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [15, 12], //Licenciatura em Geografia
          [25, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [30, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [80, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [35, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [85, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [15, 34], //Bacharelado em Medicina
          [70, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [75, 37], //Bacharelado em Engenharia de Controle e Automação
          [85, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [80, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [90, 42], //Bacharelado em Mecânica Industrial
          [10, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [95, 46], //Bacharelado em Sistemas de Informação
          [35, 47], //Bacharelado em Administração
          [25, 48], //Bacharelado em Medicina
          [15, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [35, 51], //Bacharelado em Educação Física
          [85, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas tenho dificuldades ainda.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [15, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [25, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [25, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [15, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [25, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [25, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [30, 17], //Licenciatura em Pedagogia
          [55, 18], //Superior de Tecnologia em Logística
          [85, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [15, 22], //Licenciatura em Ciências Biológicas
          [80, 23], //Licenciatura em Computação
          [20, 24], //Licenciatura em Geografia
          [35, 25], //Licenciatura em História
          [25, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [15, 28], //Licenciatura em Pedagogia
          [55, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [15, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [25, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [75, 36], //Bacharelado em Engenharia da Computação
          [55, 37], //Bacharelado em Engenharia de Controle e Automação
          [60, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [55, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [25, 41], //Bacharelado em Física de Materiais
          [70, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [15, 45], //Bacharelado em Odontologia
          [80, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [10, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [25, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [65, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [35, 54] //Licenciatura em Ciências Sociai
        ]
      }
    ]
  },
  {
    Question: "Você se identifica em estruturar uso de recursos, acompanhar gastos e definir investimentos?",
    Options: [
      {
        Text: "Não. Não tenho interesse nisso.",
        Values: [
          [60, 1], //Bacharelado em Enfermagem
          [60, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [60, 4], //Licenciatura em Ciências Biológicas
          [65, 5], //Licenciatura em Geografia
          [65, 6], //Licenciatura em História
          [65, 7], //Licenciatura em Letras Português/Espanhol
          [65, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [65, 10], //Licenciatura em Pedagogia
          [65, 11], //Licenciatura em História
          [60, 12], //Licenciatura em Geografia
          [60, 13], //Licenciatura em Matemática
          [65, 14], //Licenciatura em Ciências Biológicas
          [65, 15], //Licenciatura em Letras Português/Inglês
          [65, 16], //Licenciatura em Letras Português/Espanhol
          [65, 17], //Licenciatura em Pedagogia
          [10, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [60, 20], //Bacharelado em Medicina
          [65, 21], //Bacharelado em Psicologia
          [60, 22], //Licenciatura em Ciências Biológicas
          [55, 23], //Licenciatura em Computação
          [60, 24], //Licenciatura em Geografia
          [65, 25], //Licenciatura em História
          [65, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [60, 27], //Licenciatura em Matemática
          [65, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [65, 31], //Bacharelado em Direito
          [60, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [60, 34], //Bacharelado em Medicina
          [55, 35], //Bacharelado em Engenharia Civil
          [55, 36], //Bacharelado em Engenharia da Computação
          [55, 37], //Bacharelado em Engenharia de Controle e Automação
          [55, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [55, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [55, 40], //Bacharelado em Engenharia - Telecomunicações
          [55, 41], //Bacharelado em Física de Materiais
          [45, 42], //Bacharelado em Mecânica Industrial
          [10, 43], //Bacharelado em Administração de Empresas
          [65, 44], //Bacharelado em Direito
          [60, 45], //Bacharelado em Odontologia
          [55, 46], //Bacharelado em Sistemas de Informação
          [10, 47], //Bacharelado em Administração
          [60, 48], //Bacharelado em Medicina
          [60, 49], //Bacharelado em Saúde Coletiva
          [60, 50], //Licenciatura em Educação Física
          [60, 51], //Bacharelado em Educação Física
          [60, 52], //Bacharelado em Ciências Biológicas
          [60, 53], //Bacharelado em Enfermagem
          [65, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Mas tenho interesse nisso.",
        Values: [
          [30, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [30, 4], //Licenciatura em Ciências Biológicas
          [20, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [60, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [30, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [30, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [60, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [35, 35], //Bacharelado em Engenharia Civil
          [35, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [35, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [35, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [45, 42], //Bacharelado em Mecânica Industrial
          [60, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [35, 46], //Bacharelado em Sistemas de Informação
          [60, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas esse não é meu foco.",
        Values: [
          [65, 1], //Bacharelado em Enfermagem
          [65, 2], //Bacharelado em Fisioterapia
          [65, 3], //Bacharelado em Nutrição
          [65, 4], //Licenciatura em Ciências Biológicas
          [70, 5], //Licenciatura em Geografia
          [70, 6], //Licenciatura em História
          [70, 7], //Licenciatura em Letras Português/Espanhol
          [70, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [70, 10], //Licenciatura em Pedagogia
          [70, 11], //Licenciatura em História
          [65, 12], //Licenciatura em Geografia
          [65, 13], //Licenciatura em Matemática
          [70, 14], //Licenciatura em Ciências Biológicas
          [70, 15], //Licenciatura em Letras Português/Inglês
          [70, 16], //Licenciatura em Letras Português/Espanhol
          [70, 17], //Licenciatura em Pedagogia
          [15, 18], //Superior de Tecnologia em Logística
          [35, 19], //Bacharelado em Engenharia de Software
          [65, 20], //Bacharelado em Medicina
          [70, 21], //Bacharelado em Psicologia
          [65, 22], //Licenciatura em Ciências Biológicas
          [55, 23], //Licenciatura em Computação
          [65, 24], //Licenciatura em Geografia
          [70, 25], //Licenciatura em História
          [70, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [65, 27], //Licenciatura em Matemática
          [70, 28], //Licenciatura em Pedagogia
          [15, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [70, 31], //Bacharelado em Direito
          [65, 32], //Bacharelado em Odontologia
          [15, 33], //Bacharelado em Administração
          [65, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [60, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [60, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [60, 40], //Bacharelado em Engenharia - Telecomunicações
          [60, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [15, 43], //Bacharelado em Administração de Empresas
          [70, 44], //Bacharelado em Direito
          [65, 45], //Bacharelado em Odontologia
          [55, 46], //Bacharelado em Sistemas de Informação
          [15, 47], //Bacharelado em Administração
          [65, 48], //Bacharelado em Medicina
          [65, 49], //Bacharelado em Saúde Coletiva
          [65, 50], //Licenciatura em Educação Física
          [65, 51], //Bacharelado em Educação Física
          [65, 52], //Bacharelado em Ciências Biológicas
          [65, 53], //Bacharelado em Enfermagem
          [70, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto de estrutar, acompanhar e definir recursos.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [40, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [100, 18], //Superior de Tecnologia em Logística
          [40, 19], //Bacharelado em Engenharia de Software
          [40, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [20, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [20, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [50, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [100, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [100, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [50, 35], //Bacharelado em Engenharia Civil
          [40, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [40, 42], //Bacharelado em Mecânica Industrial
          [100, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [100, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não sei. Não entendo muito sobre isto.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [50, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [50, 4], //Licenciatura em Ciências Biológicas
          [60, 5], //Licenciatura em Geografia
          [60, 6], //Licenciatura em História
          [60, 7], //Licenciatura em Letras Português/Espanhol
          [60, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [60, 10], //Licenciatura em Pedagogia
          [60, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [50, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [60, 15], //Licenciatura em Letras Português/Inglês
          [60, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [30, 18], //Superior de Tecnologia em Logística
          [50, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [60, 21], //Bacharelado em Psicologia
          [50, 22], //Licenciatura em Ciências Biológicas
          [50, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [60, 25], //Licenciatura em História
          [60, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [50, 27], //Licenciatura em Matemática
          [60, 28], //Licenciatura em Pedagogia
          [30, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [50, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [30, 33], //Bacharelado em Administração
          [50, 34], //Bacharelado em Medicina
          [50, 35], //Bacharelado em Engenharia Civil
          [50, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [50, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [50, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [50, 40], //Bacharelado em Engenharia - Telecomunicações
          [50, 41], //Bacharelado em Física de Materiais
          [40, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [50, 46], //Bacharelado em Sistemas de Informação
          [30, 47], //Bacharelado em Administração
          [50, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [50, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [50, 52], //Bacharelado em Ciências Biológicas
          [50, 53], //Bacharelado em Enfermagem
          [50, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Você gosta de buscar conhecimentos, descobrir novos achados e promover a ciência?",
    Options: [
      {
        Text: "Não. Prefiro algo mais objetivo.",
        Values: [
          [45, 1], //Bacharelado em Enfermagem
          [45, 2], //Bacharelado em Fisioterapia
          [45, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [30, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [75, 9], //Licenciatura em Matemática
          [30, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [75, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [30, 15], //Licenciatura em Letras Português/Inglês
          [30, 16], //Licenciatura em Letras Português/Espanhol
          [30, 17], //Licenciatura em Pedagogia
          [75, 18], //Superior de Tecnologia em Logística
          [65, 19], //Bacharelado em Engenharia de Software
          [45, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [65, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [30, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [75, 27], //Licenciatura em Matemática
          [30, 28], //Licenciatura em Pedagogia
          [75, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [45, 32], //Bacharelado em Odontologia
          [45, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [65, 35], //Bacharelado em Engenharia Civil
          [65, 36], //Bacharelado em Engenharia da Computação
          [65, 37], //Bacharelado em Engenharia de Controle e Automação
          [65, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [65, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [65, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [65, 42], //Bacharelado em Mecânica Industrial
          [45, 43], //Bacharelado em Administração de Empresas
          [30, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [65, 46], //Bacharelado em Sistemas de Informação
          [45, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [45, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [45, 51], //Bacharelado em Educação Física
          [10, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Mas estou aberto a desafios.",
        Values: [
          [30, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [60, 4], //Licenciatura em Ciências Biológicas
          [35, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [35, 7], //Licenciatura em Letras Português/Espanhol
          [35, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [35, 10], //Licenciatura em Pedagogia
          [35, 11], //Licenciatura em História
          [35, 12], //Licenciatura em Geografia
          [35, 13], //Licenciatura em Matemática
          [60, 14], //Licenciatura em Ciências Biológicas
          [35, 15], //Licenciatura em Letras Português/Inglês
          [35, 16], //Licenciatura em Letras Português/Espanhol
          [35, 17], //Licenciatura em Pedagogia
          [25, 18], //Superior de Tecnologia em Logística
          [25, 19], //Bacharelado em Engenharia de Software
          [30, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [60, 22], //Licenciatura em Ciências Biológicas
          [25, 23], //Licenciatura em Computação
          [35, 24], //Licenciatura em Geografia
          [35, 25], //Licenciatura em História
          [35, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [35, 28], //Licenciatura em Pedagogia
          [25, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [30, 33], //Bacharelado em Administração
          [35, 34], //Bacharelado em Medicina
          [25, 35], //Bacharelado em Engenharia Civil
          [25, 36], //Bacharelado em Engenharia da Computação
          [25, 37], //Bacharelado em Engenharia de Controle e Automação
          [25, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [25, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [25, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [25, 42], //Bacharelado em Mecânica Industrial
          [30, 43], //Bacharelado em Administração de Empresas
          [35, 44], //Bacharelado em Direito
          [35, 45], //Bacharelado em Odontologia
          [25, 46], //Bacharelado em Sistemas de Informação
          [30, 47], //Bacharelado em Administração
          [35, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [35, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [60, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [60, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas esse não é meu foco.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [50, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [35, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [35, 7], //Licenciatura em Letras Português/Espanhol
          [35, 8], //Licenciatura em Letras Português/Inglês
          [70, 9], //Licenciatura em Matemática
          [35, 10], //Licenciatura em Pedagogia
          [35, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [35, 13], //Licenciatura em Matemática
          [20, 14], //Licenciatura em Ciências Biológicas
          [35, 15], //Licenciatura em Letras Português/Inglês
          [35, 16], //Licenciatura em Letras Português/Espanhol
          [35, 17], //Licenciatura em Pedagogia
          [70, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [35, 21], //Bacharelado em Psicologia
          [20, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [35, 24], //Licenciatura em Geografia
          [35, 25], //Licenciatura em História
          [35, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [70, 27], //Licenciatura em Matemática
          [35, 28], //Licenciatura em Pedagogia
          [70, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [50, 33], //Bacharelado em Administração
          [35, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [60, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [60, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [60, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [60, 42], //Bacharelado em Mecânica Industrial
          [50, 43], //Bacharelado em Administração de Empresas
          [35, 44], //Bacharelado em Direito
          [35, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [35, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito de buscar e promover a ciência.",
        Values: [
          [15, 1], //Bacharelado em Enfermagem
          [15, 2], //Bacharelado em Fisioterapia
          [15, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [20, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [20, 13], //Licenciatura em Matemática
          [100, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [10, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [15, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [20, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [20, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [15, 32], //Bacharelado em Odontologia
          [15, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [10, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [15, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [15, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [15, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [15, 51], //Bacharelado em Educação Física
          [100, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém tenho certa dificuldade quanto a isto.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [25, 3], //Bacharelado em Nutrição
          [80, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [30, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [30, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [80, 14], //Licenciatura em Ciências Biológicas
          [30, 15], //Licenciatura em Letras Português/Inglês
          [30, 16], //Licenciatura em Letras Português/Espanhol
          [30, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [20, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [80, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [30, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [30, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [25, 32], //Bacharelado em Odontologia
          [25, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [20, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [20, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [20, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [25, 43], //Bacharelado em Administração de Empresas
          [30, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [20, 46], //Bacharelado em Sistemas de Informação
          [25, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [25, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [80, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [80, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Gosta de desenvolver novos produtos, instrumentos ou ferramentas?",
    Options: [
      {
        Text: "Não. Não tenho interesse nisso.",
        Values: [
          [70, 1], //Bacharelado em Enfermagem
          [70, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [60, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [80, 6], //Licenciatura em História
          [80, 7], //Licenciatura em Letras Português/Espanhol
          [80, 8], //Licenciatura em Letras Português/Inglês
          [70, 9], //Licenciatura em Matemática
          [80, 10], //Licenciatura em Pedagogia
          [80, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [70, 13], //Licenciatura em Matemática
          [60, 14], //Licenciatura em Ciências Biológicas
          [80, 15], //Licenciatura em Letras Português/Inglês
          [80, 16], //Licenciatura em Letras Português/Espanhol
          [80, 17], //Licenciatura em Pedagogia
          [40, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [70, 20], //Bacharelado em Medicina
          [80, 21], //Bacharelado em Psicologia
          [60, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [80, 25], //Licenciatura em História
          [80, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [70, 27], //Licenciatura em Matemática
          [80, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [70, 30], //Bacharelado em Serviços Sociais
          [80, 31], //Bacharelado em Direito
          [70, 32], //Bacharelado em Odontologia
          [70, 33], //Bacharelado em Administração
          [70, 34], //Bacharelado em Medicina
          [10, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [70, 43], //Bacharelado em Administração de Empresas
          [80, 44], //Bacharelado em Direito
          [70, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [55, 47], //Bacharelado em Administração
          [70, 48], //Bacharelado em Medicina
          [70, 49], //Bacharelado em Saúde Coletiva
          [60, 50], //Licenciatura em Educação Física
          [60, 51], //Bacharelado em Educação Física
          [60, 52], //Bacharelado em Ciências Biológicas
          [40, 53], //Bacharelado em Enfermagem
          [70, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Mas gostaria de aprender.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [30, 4], //Licenciatura em Ciências Biológicas
          [45, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [45, 12], //Licenciatura em Geografia
          [25, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [45, 18], //Superior de Tecnologia em Logística
          [70, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [30, 22], //Licenciatura em Ciências Biológicas
          [70, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [25, 32], //Bacharelado em Odontologia
          [25, 33], //Bacharelado em Administração
          [25, 34], //Bacharelado em Medicina
          [70, 35], //Bacharelado em Engenharia Civil
          [70, 36], //Bacharelado em Engenharia da Computação
          [70, 37], //Bacharelado em Engenharia de Controle e Automação
          [70, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [70, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [70, 40], //Bacharelado em Engenharia - Telecomunicações
          [70, 41], //Bacharelado em Física de Materiais
          [70, 42], //Bacharelado em Mecânica Industrial
          [25, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [70, 46], //Bacharelado em Sistemas de Informação
          [45, 47], //Bacharelado em Administração
          [25, 48], //Bacharelado em Medicina
          [70, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [25, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém pretendo estudar outras coisas.",
        Values: [
          [65, 1], //Bacharelado em Enfermagem
          [65, 2], //Bacharelado em Fisioterapia
          [55, 3], //Bacharelado em Nutrição
          [55, 4], //Licenciatura em Ciências Biológicas
          [45, 5], //Licenciatura em Geografia
          [75, 6], //Licenciatura em História
          [75, 7], //Licenciatura em Letras Português/Espanhol
          [75, 8], //Licenciatura em Letras Português/Inglês
          [65, 9], //Licenciatura em Matemática
          [75, 10], //Licenciatura em Pedagogia
          [75, 11], //Licenciatura em História
          [45, 12], //Licenciatura em Geografia
          [65, 13], //Licenciatura em Matemática
          [55, 14], //Licenciatura em Ciências Biológicas
          [75, 15], //Licenciatura em Letras Português/Inglês
          [75, 16], //Licenciatura em Letras Português/Espanhol
          [75, 17], //Licenciatura em Pedagogia
          [45, 18], //Superior de Tecnologia em Logística
          [20, 19], //Bacharelado em Engenharia de Software
          [65, 20], //Bacharelado em Medicina
          [75, 21], //Bacharelado em Psicologia
          [55, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [75, 25], //Licenciatura em História
          [75, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [65, 27], //Licenciatura em Matemática
          [75, 28], //Licenciatura em Pedagogia
          [45, 29], //Superior de Tecnologia em Logística
          [65, 30], //Bacharelado em Serviços Sociais
          [75, 31], //Bacharelado em Direito
          [65, 32], //Bacharelado em Odontologia
          [65, 33], //Bacharelado em Administração
          [65, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [20, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [20, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [20, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [65, 43], //Bacharelado em Administração de Empresas
          [75, 44], //Bacharelado em Direito
          [65, 45], //Bacharelado em Odontologia
          [20, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [65, 48], //Bacharelado em Medicina
          [65, 49], //Bacharelado em Saúde Coletiva
          [55, 50], //Licenciatura em Educação Física
          [55, 51], //Bacharelado em Educação Física
          [55, 52], //Bacharelado em Ciências Biológicas
          [45, 53], //Bacharelado em Enfermagem
          [65, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [30, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [20, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [30, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [20, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [100, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [100, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [100, 40], //Bacharelado em Engenharia - Telecomunicações
          [100, 41], //Bacharelado em Física de Materiais
          [100, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [100, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [100, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas nunca coloquei em prática.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [35, 3], //Bacharelado em Nutrição
          [35, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [15, 6], //Licenciatura em História
          [15, 7], //Licenciatura em Letras Português/Espanhol
          [15, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [15, 10], //Licenciatura em Pedagogia
          [15, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [25, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [15, 15], //Licenciatura em Letras Português/Inglês
          [15, 16], //Licenciatura em Letras Português/Espanhol
          [15, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [90, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [15, 21], //Bacharelado em Psicologia
          [35, 22], //Licenciatura em Ciências Biológicas
          [90, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [15, 25], //Licenciatura em História
          [15, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [15, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [15, 31], //Bacharelado em Direito
          [25, 32], //Bacharelado em Odontologia
          [25, 33], //Bacharelado em Administração
          [25, 34], //Bacharelado em Medicina
          [90, 35], //Bacharelado em Engenharia Civil
          [90, 36], //Bacharelado em Engenharia da Computação
          [90, 37], //Bacharelado em Engenharia de Controle e Automação
          [90, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [90, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [90, 40], //Bacharelado em Engenharia - Telecomunicações
          [90, 41], //Bacharelado em Física de Materiais
          [90, 42], //Bacharelado em Mecânica Industrial
          [25, 43], //Bacharelado em Administração de Empresas
          [15, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [90, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [25, 48], //Bacharelado em Medicina
          [90, 49], //Bacharelado em Saúde Coletiva
          [35, 50], //Licenciatura em Educação Física
          [35, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [25, 53], //Bacharelado em Enfermagem
          [35, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Interagir com pessoas, e ampliar suas capacidades fazem parte do seu interesse?",
    Options: [
      {
        Text: "Não. Me considero mais individualista.",
        Values: [
          [15, 1], //Bacharelado em Enfermagem
          [15, 2], //Bacharelado em Fisioterapia
          [15, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [60, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [15, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [30, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [60, 29], //Superior de Tecnologia em Logística
          [60, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [15, 32], //Bacharelado em Odontologia
          [15, 33], //Bacharelado em Administração
          [15, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [60, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [60, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [60, 40], //Bacharelado em Engenharia - Telecomunicações
          [60, 41], //Bacharelado em Física de Materiais
          [60, 42], //Bacharelado em Mecânica Industrial
          [40, 43], //Bacharelado em Administração de Empresas
          [15, 44], //Bacharelado em Direito
          [15, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [15, 47], //Bacharelado em Administração
          [15, 48], //Bacharelado em Medicina
          [15, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [15, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [15, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Até gosto de interagir mas não tenho interesse em ampliar suas capacidades.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [50, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [70, 18], //Superior de Tecnologia em Logística
          [70, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [30, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [70, 29], //Superior de Tecnologia em Logística
          [70, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [50, 33], //Bacharelado em Administração
          [50, 34], //Bacharelado em Medicina
          [70, 35], //Bacharelado em Engenharia Civil
          [70, 36], //Bacharelado em Engenharia da Computação
          [70, 37], //Bacharelado em Engenharia de Controle e Automação
          [70, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [70, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [70, 40], //Bacharelado em Engenharia - Telecomunicações
          [70, 41], //Bacharelado em Física de Materiais
          [70, 42], //Bacharelado em Mecânica Industrial
          [40, 43], //Bacharelado em Administração de Empresas
          [50, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [70, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [50, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [45, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Pretendo estudar outra coisa no momento.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [50, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [50, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [50, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [50, 35], //Bacharelado em Engenharia Civil
          [50, 36], //Bacharelado em Engenharia da Computação
          [50, 37], //Bacharelado em Engenharia de Controle e Automação
          [50, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [50, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [50, 40], //Bacharelado em Engenharia - Telecomunicações
          [50, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [40, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [50, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito disso.",
        Values: [
          [90, 1], //Bacharelado em Enfermagem
          [90, 2], //Bacharelado em Fisioterapia
          [90, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [100, 5], //Licenciatura em Geografia
          [100, 6], //Licenciatura em História
          [100, 7], //Licenciatura em Letras Português/Espanhol
          [100, 8], //Licenciatura em Letras Português/Inglês
          [100, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [100, 11], //Licenciatura em História
          [100, 12], //Licenciatura em Geografia
          [100, 13], //Licenciatura em Matemática
          [100, 14], //Licenciatura em Ciências Biológicas
          [100, 15], //Licenciatura em Letras Português/Inglês
          [100, 16], //Licenciatura em Letras Português/Espanhol
          [100, 17], //Licenciatura em Pedagogia
          [15, 18], //Superior de Tecnologia em Logística
          [15, 19], //Bacharelado em Engenharia de Software
          [90, 20], //Bacharelado em Medicina
          [100, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [15, 23], //Licenciatura em Computação
          [100, 24], //Licenciatura em Geografia
          [100, 25], //Licenciatura em História
          [100, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [100, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [15, 29], //Superior de Tecnologia em Logística
          [15, 30], //Bacharelado em Serviços Sociais
          [35, 31], //Bacharelado em Direito
          [90, 32], //Bacharelado em Odontologia
          [75, 33], //Bacharelado em Administração
          [90, 34], //Bacharelado em Medicina
          [15, 35], //Bacharelado em Engenharia Civil
          [15, 36], //Bacharelado em Engenharia da Computação
          [15, 37], //Bacharelado em Engenharia de Controle e Automação
          [15, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [15, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [15, 40], //Bacharelado em Engenharia - Telecomunicações
          [15, 41], //Bacharelado em Física de Materiais
          [15, 42], //Bacharelado em Mecânica Industrial
          [75, 43], //Bacharelado em Administração de Empresas
          [90, 44], //Bacharelado em Direito
          [90, 45], //Bacharelado em Odontologia
          [15, 46], //Bacharelado em Sistemas de Informação
          [75, 47], //Bacharelado em Administração
          [90, 48], //Bacharelado em Medicina
          [90, 49], //Bacharelado em Saúde Coletiva
          [100, 50], //Licenciatura em Educação Física
          [90, 51], //Bacharelado em Educação Física
          [50, 52], //Bacharelado em Ciências Biológicas
          [90, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém tenho dificuldades quanto a isto.",
        Values: [
          [75, 1], //Bacharelado em Enfermagem
          [75, 2], //Bacharelado em Fisioterapia
          [75, 3], //Bacharelado em Nutrição
          [85, 4], //Licenciatura em Ciências Biológicas
          [85, 5], //Licenciatura em Geografia
          [85, 6], //Licenciatura em História
          [85, 7], //Licenciatura em Letras Português/Espanhol
          [85, 8], //Licenciatura em Letras Português/Inglês
          [85, 9], //Licenciatura em Matemática
          [85, 10], //Licenciatura em Pedagogia
          [85, 11], //Licenciatura em História
          [85, 12], //Licenciatura em Geografia
          [85, 13], //Licenciatura em Matemática
          [85, 14], //Licenciatura em Ciências Biológicas
          [85, 15], //Licenciatura em Letras Português/Inglês
          [85, 16], //Licenciatura em Letras Português/Espanhol
          [85, 17], //Licenciatura em Pedagogia
          [35, 18], //Superior de Tecnologia em Logística
          [35, 19], //Bacharelado em Engenharia de Software
          [75, 20], //Bacharelado em Medicina
          [85, 21], //Bacharelado em Psicologia
          [85, 22], //Licenciatura em Ciências Biológicas
          [35, 23], //Licenciatura em Computação
          [85, 24], //Licenciatura em Geografia
          [85, 25], //Licenciatura em História
          [85, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [85, 27], //Licenciatura em Matemática
          [85, 28], //Licenciatura em Pedagogia
          [35, 29], //Superior de Tecnologia em Logística
          [35, 30], //Bacharelado em Serviços Sociais
          [55, 31], //Bacharelado em Direito
          [75, 32], //Bacharelado em Odontologia
          [55, 33], //Bacharelado em Administração
          [75, 34], //Bacharelado em Medicina
          [35, 35], //Bacharelado em Engenharia Civil
          [35, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [35, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [35, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [35, 42], //Bacharelado em Mecânica Industrial
          [55, 43], //Bacharelado em Administração de Empresas
          [45, 44], //Bacharelado em Direito
          [75, 45], //Bacharelado em Odontologia
          [35, 46], //Bacharelado em Sistemas de Informação
          [55, 47], //Bacharelado em Administração
          [75, 48], //Bacharelado em Medicina
          [75, 49], //Bacharelado em Saúde Coletiva
          [85, 50], //Licenciatura em Educação Física
          [75, 51], //Bacharelado em Educação Física
          [45, 52], //Bacharelado em Ciências Biológicas
          [75, 53], //Bacharelado em Enfermagem
          [85, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Você gosta de sistematizar números, códigos, ou informações, fazer conclusões e criar prognósticos?",
    Options: [
      {
        Text: "Não. Não gosto disso.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [15, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [25, 5], //Licenciatura em Geografia
          [60, 6], //Licenciatura em História
          [70, 7], //Licenciatura em Letras Português/Espanhol
          [70, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [70, 10], //Licenciatura em Pedagogia
          [70, 11], //Licenciatura em História
          [25, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [70, 15], //Licenciatura em Letras Português/Inglês
          [70, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [15, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [60, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [25, 24], //Licenciatura em Geografia
          [60, 25], //Licenciatura em História
          [70, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [60, 28], //Licenciatura em Pedagogia
          [15, 29], //Superior de Tecnologia em Logística
          [60, 30], //Bacharelado em Serviços Sociais
          [55, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [55, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [10, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [55, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [55, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [10, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [50, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Porém quero me desafiar e aprender.",
        Values: [
          [55, 1], //Bacharelado em Enfermagem
          [55, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [60, 4], //Licenciatura em Ciências Biológicas
          [45, 5], //Licenciatura em Geografia
          [30, 6], //Licenciatura em História
          [25, 7], //Licenciatura em Letras Português/Espanhol
          [25, 8], //Licenciatura em Letras Português/Inglês
          [60, 9], //Licenciatura em Matemática
          [25, 10], //Licenciatura em Pedagogia
          [25, 11], //Licenciatura em História
          [45, 12], //Licenciatura em Geografia
          [60, 13], //Licenciatura em Matemática
          [60, 14], //Licenciatura em Ciências Biológicas
          [25, 15], //Licenciatura em Letras Português/Inglês
          [25, 16], //Licenciatura em Letras Português/Espanhol
          [30, 17], //Licenciatura em Pedagogia
          [55, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [60, 21], //Bacharelado em Psicologia
          [60, 22], //Licenciatura em Ciências Biológicas
          [60, 23], //Licenciatura em Computação
          [45, 24], //Licenciatura em Geografia
          [25, 25], //Licenciatura em História
          [25, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [60, 27], //Licenciatura em Matemática
          [25, 28], //Licenciatura em Pedagogia
          [55, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [55, 32], //Bacharelado em Odontologia
          [35, 33], //Bacharelado em Administração
          [55, 34], //Bacharelado em Medicina
          [60, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [60, 37], //Bacharelado em Engenharia de Controle e Automação
          [60, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [60, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [60, 40], //Bacharelado em Engenharia - Telecomunicações
          [55, 41], //Bacharelado em Física de Materiais
          [60, 42], //Bacharelado em Mecânica Industrial
          [35, 43], //Bacharelado em Administração de Empresas
          [30, 44], //Bacharelado em Direito
          [55, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [35, 47], //Bacharelado em Administração
          [55, 48], //Bacharelado em Medicina
          [55, 49], //Bacharelado em Saúde Coletiva
          [55, 50], //Licenciatura em Educação Física
          [55, 51], //Bacharelado em Educação Física
          [60, 52], //Bacharelado em Ciências Biológicas
          [55, 53], //Bacharelado em Enfermagem
          [45, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém este não é meu objetivo.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [15, 4], //Licenciatura em Ciências Biológicas
          [25, 5], //Licenciatura em Geografia
          [65, 6], //Licenciatura em História
          [70, 7], //Licenciatura em Letras Português/Espanhol
          [70, 8], //Licenciatura em Letras Português/Inglês
          [15, 9], //Licenciatura em Matemática
          [70, 10], //Licenciatura em Pedagogia
          [70, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [15, 13], //Licenciatura em Matemática
          [15, 14], //Licenciatura em Ciências Biológicas
          [70, 15], //Licenciatura em Letras Português/Inglês
          [70, 16], //Licenciatura em Letras Português/Espanhol
          [65, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [15, 19], //Bacharelado em Engenharia de Software
          [25, 20], //Bacharelado em Medicina
          [65, 21], //Bacharelado em Psicologia
          [15, 22], //Licenciatura em Ciências Biológicas
          [15, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [65, 25], //Licenciatura em História
          [70, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [15, 27], //Licenciatura em Matemática
          [65, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [65, 30], //Bacharelado em Serviços Sociais
          [65, 31], //Bacharelado em Direito
          [25, 32], //Bacharelado em Odontologia
          [60, 33], //Bacharelado em Administração
          [25, 34], //Bacharelado em Medicina
          [15, 35], //Bacharelado em Engenharia Civil
          [15, 36], //Bacharelado em Engenharia da Computação
          [15, 37], //Bacharelado em Engenharia de Controle e Automação
          [15, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [15, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [15, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [15, 42], //Bacharelado em Mecânica Industrial
          [60, 43], //Bacharelado em Administração de Empresas
          [65, 44], //Bacharelado em Direito
          [25, 45], //Bacharelado em Odontologia
          [15, 46], //Bacharelado em Sistemas de Informação
          [60, 47], //Bacharelado em Administração
          [25, 48], //Bacharelado em Medicina
          [25, 49], //Bacharelado em Saúde Coletiva
          [25, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [15, 52], //Bacharelado em Ciências Biológicas
          [25, 53], //Bacharelado em Enfermagem
          [55, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém tenho dificuldades.",
        Values: [
          [75, 1], //Bacharelado em Enfermagem
          [75, 2], //Bacharelado em Fisioterapia
          [80, 3], //Bacharelado em Nutrição
          [80, 4], //Licenciatura em Ciências Biológicas
          [15, 5], //Licenciatura em Geografia
          [15, 6], //Licenciatura em História
          [15, 7], //Licenciatura em Letras Português/Espanhol
          [15, 8], //Licenciatura em Letras Português/Inglês
          [80, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [80, 13], //Licenciatura em Matemática
          [80, 14], //Licenciatura em Ciências Biológicas
          [25, 15], //Licenciatura em Letras Português/Inglês
          [15, 16], //Licenciatura em Letras Português/Espanhol
          [15, 17], //Licenciatura em Pedagogia
          [75, 18], //Superior de Tecnologia em Logística
          [80, 19], //Bacharelado em Engenharia de Software
          [85, 20], //Bacharelado em Medicina
          [25, 21], //Bacharelado em Psicologia
          [80, 22], //Licenciatura em Ciências Biológicas
          [80, 23], //Licenciatura em Computação
          [15, 24], //Licenciatura em Geografia
          [15, 25], //Licenciatura em História
          [15, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [80, 27], //Licenciatura em Matemática
          [15, 28], //Licenciatura em Pedagogia
          [70, 29], //Superior de Tecnologia em Logística
          [15, 30], //Bacharelado em Serviços Sociais
          [25, 31], //Bacharelado em Direito
          [75, 32], //Bacharelado em Odontologia
          [70, 33], //Bacharelado em Administração
          [75, 34], //Bacharelado em Medicina
          [80, 35], //Bacharelado em Engenharia Civil
          [80, 36], //Bacharelado em Engenharia da Computação
          [80, 37], //Bacharelado em Engenharia de Controle e Automação
          [80, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [80, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [80, 40], //Bacharelado em Engenharia - Telecomunicações
          [75, 41], //Bacharelado em Física de Materiais
          [80, 42], //Bacharelado em Mecânica Industrial
          [70, 43], //Bacharelado em Administração de Empresas
          [25, 44], //Bacharelado em Direito
          [75, 45], //Bacharelado em Odontologia
          [80, 46], //Bacharelado em Sistemas de Informação
          [70, 47], //Bacharelado em Administração
          [75, 48], //Bacharelado em Medicina
          [75, 49], //Bacharelado em Saúde Coletiva
          [75, 50], //Licenciatura em Educação Física
          [75, 51], //Bacharelado em Educação Física
          [80, 52], //Bacharelado em Ciências Biológicas
          [75, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito.",
        Values: [
          [95, 1], //Bacharelado em Enfermagem
          [95, 2], //Bacharelado em Fisioterapia
          [100, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [95, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [25, 12], //Licenciatura em Geografia
          [90, 13], //Licenciatura em Matemática
          [95, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [90, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [95, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [95, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [90, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [95, 32], //Bacharelado em Odontologia
          [80, 33], //Bacharelado em Administração
          [95, 34], //Bacharelado em Medicina
          [100, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [100, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [100, 40], //Bacharelado em Engenharia - Telecomunicações
          [90, 41], //Bacharelado em Física de Materiais
          [100, 42], //Bacharelado em Mecânica Industrial
          [80, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [95, 45], //Bacharelado em Odontologia
          [100, 46], //Bacharelado em Sistemas de Informação
          [80, 47], //Bacharelado em Administração
          [95, 48], //Bacharelado em Medicina
          [95, 49], //Bacharelado em Saúde Coletiva
          [95, 50], //Licenciatura em Educação Física
          [95, 51], //Bacharelado em Educação Física
          [100, 52], //Bacharelado em Ciências Biológicas
          [95, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Você gosta de interagir/estudar animais ou plantas?",
    Options: [
      {
        Text: "Não. Não gosto disso.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [20, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [40, 7], //Licenciatura em Letras Português/Espanhol
          [40, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [40, 10], //Licenciatura em Pedagogia
          [45, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [10, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [80, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [40, 25], //Licenciatura em História
          [40, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [40, 28], //Licenciatura em Pedagogia
          [80, 29], //Superior de Tecnologia em Logística
          [20, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [10, 32], //Bacharelado em Odontologia
          [75, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [100, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [100, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [80, 40], //Bacharelado em Engenharia - Telecomunicações
          [45, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [75, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [100, 46], //Bacharelado em Sistemas de Informação
          [75, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [10, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Porém isto não é do meu interesse.",
        Values: [
          [35, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [65, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [25, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [25, 12], //Licenciatura em Geografia
          [25, 13], //Licenciatura em Matemática
          [65, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [45, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [65, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [40, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [20, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [45, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [30, 36], //Bacharelado em Engenharia da Computação
          [15, 37], //Bacharelado em Engenharia de Controle e Automação
          [15, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [15, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [15, 40], //Bacharelado em Engenharia - Telecomunicações
          [15, 41], //Bacharelado em Física de Materiais
          [15, 42], //Bacharelado em Mecânica Industrial
          [10, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [10, 47], //Bacharelado em Administração
          [45, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [65, 52], //Bacharelado em Ciências Biológicas
          [35, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Gosto de interagir mas não de estudar.",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [50, 4], //Licenciatura em Ciências Biológicas
          [40, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [20, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [20, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [20, 19], //Bacharelado em Engenharia de Software
          [40, 20], //Bacharelado em Medicina
          [40, 21], //Bacharelado em Psicologia
          [50, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [40, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [40, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [20, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [20, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [20, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [20, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [20, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [20, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [20, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [20, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [50, 52], //Bacharelado em Ciências Biológicas
          [40, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Gosto de estudar mas não de interagir.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [70, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [20, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [70, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [20, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [40, 21], //Bacharelado em Psicologia
          [70, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [20, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [10, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [20, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [20, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [10, 51], //Bacharelado em Educação Física
          [70, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito dessa área.",
        Values: [
          [45, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [40, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [85, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [20, 7], //Licenciatura em Letras Português/Espanhol
          [20, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [85, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [100, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [10, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [65, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [85, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [10, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [10, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [65, 34], //Bacharelado em Medicina
          [10, 35], //Bacharelado em Engenharia Civil
          [10, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [10, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [10, 46], //Bacharelado em Sistemas de Informação
          [10, 47], //Bacharelado em Administração
          [65, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [10, 51], //Bacharelado em Educação Física
          [100, 52], //Bacharelado em Ciências Biológicas
          [45, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Se sente confortável auxiliando pessoas?",
    Options: [
      {
        Text: "Não. Não gosto disso.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [35, 3], //Bacharelado em Nutrição
          [60, 4], //Licenciatura em Ciências Biológicas
          [75, 5], //Licenciatura em Geografia
          [75, 6], //Licenciatura em História
          [10, 7], //Licenciatura em Letras Português/Espanhol
          [10, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [75, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [60, 14], //Licenciatura em Ciências Biológicas
          [10, 15], //Licenciatura em Letras Português/Inglês
          [10, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [40, 18], //Superior de Tecnologia em Logística
          [50, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [60, 22], //Licenciatura em Ciências Biológicas
          [20, 23], //Licenciatura em Computação
          [75, 24], //Licenciatura em Geografia
          [75, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [40, 29], //Superior de Tecnologia em Logística
          [10, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [10, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [30, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [45, 36], //Bacharelado em Engenharia da Computação
          [70, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [70, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [45, 46], //Bacharelado em Sistemas de Informação
          [70, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [10, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [40, 51], //Bacharelado em Educação Física
          [60, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [20, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Porém quero me desenvolver quanto a isto.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [35, 2], //Bacharelado em Fisioterapia
          [45, 3], //Bacharelado em Nutrição
          [55, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [50, 6], //Licenciatura em História
          [35, 7], //Licenciatura em Letras Português/Espanhol
          [35, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [25, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [55, 14], //Licenciatura em Ciências Biológicas
          [30, 15], //Licenciatura em Letras Português/Inglês
          [30, 16], //Licenciatura em Letras Português/Espanhol
          [25, 17], //Licenciatura em Pedagogia
          [10, 18], //Superior de Tecnologia em Logística
          [65, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [55, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [50, 25], //Licenciatura em História
          [30, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [30, 27], //Licenciatura em Matemática
          [30, 28], //Licenciatura em Pedagogia
          [30, 29], //Superior de Tecnologia em Logística
          [30, 30], //Bacharelado em Serviços Sociais
          [10, 31], //Bacharelado em Direito
          [10, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [65, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [40, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [10, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [65, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [20, 51], //Bacharelado em Educação Física
          [55, 52], //Bacharelado em Ciências Biológicas
          [25, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas quero algo mais individual.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [40, 3], //Bacharelado em Nutrição
          [30, 4], //Licenciatura em Ciências Biológicas
          [40, 5], //Licenciatura em Geografia
          [40, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [30, 10], //Licenciatura em Pedagogia
          [40, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [35, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [35, 15], //Licenciatura em Letras Português/Inglês
          [35, 16], //Licenciatura em Letras Português/Espanhol
          [35, 17], //Licenciatura em Pedagogia
          [35, 18], //Superior de Tecnologia em Logística
          [45, 19], //Bacharelado em Engenharia de Software
          [20, 20], //Bacharelado em Medicina
          [20, 21], //Bacharelado em Psicologia
          [30, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [45, 24], //Licenciatura em Geografia
          [45, 25], //Licenciatura em História
          [25, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [25, 27], //Licenciatura em Matemática
          [25, 28], //Licenciatura em Pedagogia
          [25, 29], //Superior de Tecnologia em Logística
          [25, 30], //Bacharelado em Serviços Sociais
          [75, 31], //Bacharelado em Direito
          [10, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [20, 35], //Bacharelado em Engenharia Civil
          [45, 36], //Bacharelado em Engenharia da Computação
          [20, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [85, 41], //Bacharelado em Física de Materiais
          [70, 42], //Bacharelado em Mecânica Industrial
          [100, 43], //Bacharelado em Administração de Empresas
          [75, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [90, 47], //Bacharelado em Administração
          [20, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [10, 50], //Licenciatura em Educação Física
          [25, 51], //Bacharelado em Educação Física
          [30, 52], //Bacharelado em Ciências Biológicas
          [20, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Gosto muito.",
        Values: [
          [100, 1], //Bacharelado em Enfermagem
          [100, 2], //Bacharelado em Fisioterapia
          [90, 3], //Bacharelado em Nutrição
          [40, 4], //Licenciatura em Ciências Biológicas
          [40, 5], //Licenciatura em Geografia
          [40, 6], //Licenciatura em História
          [75, 7], //Licenciatura em Letras Português/Espanhol
          [75, 8], //Licenciatura em Letras Português/Inglês
          [40, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [40, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [40, 13], //Licenciatura em Matemática
          [40, 14], //Licenciatura em Ciências Biológicas
          [75, 15], //Licenciatura em Letras Português/Inglês
          [75, 16], //Licenciatura em Letras Português/Espanhol
          [100, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [30, 19], //Bacharelado em Engenharia de Software
          [100, 20], //Bacharelado em Medicina
          [100, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [40, 24], //Licenciatura em Geografia
          [40, 25], //Licenciatura em História
          [40, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [40, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [85, 30], //Bacharelado em Serviços Sociais
          [60, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [100, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [30, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [80, 44], //Bacharelado em Direito
          [75, 45], //Bacharelado em Odontologia
          [30, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [100, 48], //Bacharelado em Medicina
          [100, 49], //Bacharelado em Saúde Coletiva
          [100, 50], //Licenciatura em Educação Física
          [40, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [100, 53], //Bacharelado em Enfermagem
          [65, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Mais ou menos. Depende do tipo de auxílio.",
        Values: [
          [55, 1], //Bacharelado em Enfermagem
          [55, 2], //Bacharelado em Fisioterapia
          [55, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [35, 6], //Licenciatura em História
          [45, 7], //Licenciatura em Letras Português/Espanhol
          [45, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [35, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [45, 15], //Licenciatura em Letras Português/Inglês
          [45, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [45, 19], //Bacharelado em Engenharia de Software
          [60, 20], //Bacharelado em Medicina
          [50, 21], //Bacharelado em Psicologia
          [35, 22], //Licenciatura em Ciências Biológicas
          [35, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [35, 25], //Licenciatura em História
          [45, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [35, 27], //Licenciatura em Matemática
          [35, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [60, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [60, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [45, 36], //Bacharelado em Engenharia da Computação
          [10, 37], //Bacharelado em Engenharia de Controle e Automação
          [10, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [10, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [10, 40], //Bacharelado em Engenharia - Telecomunicações
          [10, 41], //Bacharelado em Física de Materiais
          [10, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [60, 45], //Bacharelado em Odontologia
          [45, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [60, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [60, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [55, 53], //Bacharelado em Enfermagem
          [75, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Seu objetivo é ajudar pessoas e resolver seus problemas?",
    Options: [
      {
        Text: "Não. Este não é meu objetivo.",
        Values: [
          [15, 1], //Bacharelado em Enfermagem
          [20, 2], //Bacharelado em Fisioterapia
          [25, 3], //Bacharelado em Nutrição
          [50, 4], //Licenciatura em Ciências Biológicas
          [60, 5], //Licenciatura em Geografia
          [90, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [10, 9], //Licenciatura em Matemática
          [10, 10], //Licenciatura em Pedagogia
          [90, 11], //Licenciatura em História
          [60, 12], //Licenciatura em Geografia
          [10, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [25, 15], //Licenciatura em Letras Português/Inglês
          [25, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [40, 19], //Bacharelado em Engenharia de Software
          [40, 20], //Bacharelado em Medicina
          [10, 21], //Bacharelado em Psicologia
          [50, 22], //Licenciatura em Ciências Biológicas
          [25, 23], //Licenciatura em Computação
          [90, 24], //Licenciatura em Geografia
          [90, 25], //Licenciatura em História
          [30, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [30, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [40, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [20, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [30, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [90, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [40, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [80, 52], //Bacharelado em Ciências Biológicas
          [40, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Porém gosto disso.",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [40, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [30, 6], //Licenciatura em História
          [30, 7], //Licenciatura em Letras Português/Espanhol
          [30, 8], //Licenciatura em Letras Português/Inglês
          [40, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [30, 11], //Licenciatura em História
          [30, 12], //Licenciatura em Geografia
          [40, 13], //Licenciatura em Matemática
          [40, 14], //Licenciatura em Ciências Biológicas
          [40, 15], //Licenciatura em Letras Português/Inglês
          [40, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [40, 20], //Bacharelado em Medicina
          [60, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [30, 25], //Licenciatura em História
          [40, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [50, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [50, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [40, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [50, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [50, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [40, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [40, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Mas tenho dificuldades.",
        Values: [
          [60, 1], //Bacharelado em Enfermagem
          [70, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [10, 4], //Licenciatura em Ciências Biológicas
          [10, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [45, 7], //Licenciatura em Letras Português/Espanhol
          [45, 8], //Licenciatura em Letras Português/Inglês
          [45, 9], //Licenciatura em Matemática
          [60, 10], //Licenciatura em Pedagogia
          [10, 11], //Licenciatura em História
          [10, 12], //Licenciatura em Geografia
          [70, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [45, 15], //Licenciatura em Letras Português/Inglês
          [45, 16], //Licenciatura em Letras Português/Espanhol
          [80, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [70, 21], //Bacharelado em Psicologia
          [40, 22], //Licenciatura em Ciências Biológicas
          [40, 23], //Licenciatura em Computação
          [40, 24], //Licenciatura em Geografia
          [40, 25], //Licenciatura em História
          [40, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [40, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [60, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [50, 34], //Bacharelado em Medicina
          [40, 35], //Bacharelado em Engenharia Civil
          [50, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [35, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [35, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [65, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [60, 48], //Bacharelado em Medicina
          [70, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [80, 53], //Bacharelado em Enfermagem
          [90, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Essa é uma parte do meu objetivo.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [50, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [50, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [50, 6], //Licenciatura em História
          [50, 7], //Licenciatura em Letras Português/Espanhol
          [50, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [50, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [50, 15], //Licenciatura em Letras Português/Inglês
          [50, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [60, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [90, 21], //Bacharelado em Psicologia
          [50, 22], //Licenciatura em Ciências Biológicas
          [50, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [50, 25], //Licenciatura em História
          [50, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [50, 27], //Licenciatura em Matemática
          [50, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [60, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [50, 34], //Bacharelado em Medicina
          [40, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [50, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [50, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [50, 53], //Bacharelado em Enfermagem
          [50, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Sim. Este é meu objetivo.",
        Values: [
          [100, 1], //Bacharelado em Enfermagem
          [100, 2], //Bacharelado em Fisioterapia
          [100, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [20, 5], //Licenciatura em Geografia
          [10, 6], //Licenciatura em História
          [70, 7], //Licenciatura em Letras Português/Espanhol
          [70, 8], //Licenciatura em Letras Português/Inglês
          [70, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [70, 11], //Licenciatura em História
          [70, 12], //Licenciatura em Geografia
          [70, 13], //Licenciatura em Matemática
          [70, 14], //Licenciatura em Ciências Biológicas
          [70, 15], //Licenciatura em Letras Português/Inglês
          [70, 16], //Licenciatura em Letras Português/Espanhol
          [70, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [80, 19], //Bacharelado em Engenharia de Software
          [70, 20], //Bacharelado em Medicina
          [90, 21], //Bacharelado em Psicologia
          [70, 22], //Licenciatura em Ciências Biológicas
          [70, 23], //Licenciatura em Computação
          [70, 24], //Licenciatura em Geografia
          [70, 25], //Licenciatura em História
          [70, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [70, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [70, 30], //Bacharelado em Serviços Sociais
          [60, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [100, 34], //Bacharelado em Medicina
          [40, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [60, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [60, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [70, 48], //Bacharelado em Medicina
          [70, 49], //Bacharelado em Saúde Coletiva
          [70, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [100, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Qual o horário que você mais se sente confortável em estudar?",
    Options: [
      {
        Text: "Pela manhã, visto que acordo mais disposto.",
        Values: [
          [30, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [40, 3], //Bacharelado em Nutrição
          [30, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [30, 6], //Licenciatura em História
          [40, 7], //Licenciatura em Letras Português/Espanhol
          [40, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [30, 10], //Licenciatura em Pedagogia
          [20, 11], //Licenciatura em História
          [20, 12], //Licenciatura em Geografia
          [20, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [20, 15], //Licenciatura em Letras Português/Inglês
          [20, 16], //Licenciatura em Letras Português/Espanhol
          [10, 17], //Licenciatura em Pedagogia
          [20, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [100, 20], //Bacharelado em Medicina
          [100, 21], //Bacharelado em Psicologia
          [20, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [20, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [20, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [20, 27], //Licenciatura em Matemática
          [20, 28], //Licenciatura em Pedagogia
          [20, 29], //Superior de Tecnologia em Logística
          [40, 30], //Bacharelado em Serviços Sociais
          [40, 31], //Bacharelado em Direito
          [80, 32], //Bacharelado em Odontologia
          [10, 33], //Bacharelado em Administração
          [80, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [100, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [100, 43], //Bacharelado em Administração de Empresas
          [40, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [100, 46], //Bacharelado em Sistemas de Informação
          [10, 47], //Bacharelado em Administração
          [80, 48], //Bacharelado em Medicina
          [100, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [20, 52], //Bacharelado em Ciências Biológicas
          [40, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Pela tarde, pois trabalho pela manhã.",
        Values: [
          [40, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [40, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [20, 6], //Licenciatura em História
          [100, 7], //Licenciatura em Letras Português/Espanhol
          [100, 8], //Licenciatura em Letras Português/Inglês
          [30, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [100, 11], //Licenciatura em História
          [100, 12], //Licenciatura em Geografia
          [100, 13], //Licenciatura em Matemática
          [100, 14], //Licenciatura em Ciências Biológicas
          [60, 15], //Licenciatura em Letras Português/Inglês
          [100, 16], //Licenciatura em Letras Português/Espanhol
          [30, 17], //Licenciatura em Pedagogia
          [60, 18], //Superior de Tecnologia em Logística
          [80, 19], //Bacharelado em Engenharia de Software
          [80, 20], //Bacharelado em Medicina
          [80, 21], //Bacharelado em Psicologia
          [10, 22], //Licenciatura em Ciências Biológicas
          [80, 23], //Licenciatura em Computação
          [10, 24], //Licenciatura em Geografia
          [10, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [50, 29], //Superior de Tecnologia em Logística
          [40, 30], //Bacharelado em Serviços Sociais
          [80, 31], //Bacharelado em Direito
          [80, 32], //Bacharelado em Odontologia
          [20, 33], //Bacharelado em Administração
          [40, 34], //Bacharelado em Medicina
          [100, 35], //Bacharelado em Engenharia Civil
          [40, 36], //Bacharelado em Engenharia da Computação
          [100, 37], //Bacharelado em Engenharia de Controle e Automação
          [40, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [100, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [80, 44], //Bacharelado em Direito
          [80, 45], //Bacharelado em Odontologia
          [35, 46], //Bacharelado em Sistemas de Informação
          [20, 47], //Bacharelado em Administração
          [30, 48], //Bacharelado em Medicina
          [30, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [10, 52], //Bacharelado em Ciências Biológicas
          [40, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Pela noite, já que é quando estou mais ativo.",
        Values: [
          [60, 1], //Bacharelado em Enfermagem
          [60, 2], //Bacharelado em Fisioterapia
          [60, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [100, 5], //Licenciatura em Geografia
          [100, 6], //Licenciatura em História
          [100, 7], //Licenciatura em Letras Português/Espanhol
          [100, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [100, 12], //Licenciatura em Geografia
          [100, 13], //Licenciatura em Matemática
          [30, 14], //Licenciatura em Ciências Biológicas
          [100, 15], //Licenciatura em Letras Português/Inglês
          [100, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [60, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [100, 24], //Licenciatura em Geografia
          [100, 25], //Licenciatura em História
          [100, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [100, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [70, 29], //Superior de Tecnologia em Logística
          [20, 30], //Bacharelado em Serviços Sociais
          [80, 31], //Bacharelado em Direito
          [80, 32], //Bacharelado em Odontologia
          [80, 33], //Bacharelado em Administração
          [10, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [30, 37], //Bacharelado em Engenharia de Controle e Automação
          [25, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [25, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [25, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [100, 43], //Bacharelado em Administração de Empresas
          [80, 44], //Bacharelado em Direito
          [30, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [100, 47], //Bacharelado em Administração
          [10, 48], //Bacharelado em Medicina
          [60, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [30, 51], //Bacharelado em Educação Física
          [100, 52], //Bacharelado em Ciências Biológicas
          [70, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Durante a noite ou a tarde.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [50, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [30, 4], //Licenciatura em Ciências Biológicas
          [60, 5], //Licenciatura em Geografia
          [60, 6], //Licenciatura em História
          [50, 7], //Licenciatura em Letras Português/Espanhol
          [40, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [60, 10], //Licenciatura em Pedagogia
          [60, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [30, 13], //Licenciatura em Matemática
          [40, 14], //Licenciatura em Ciências Biológicas
          [60, 15], //Licenciatura em Letras Português/Inglês
          [50, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [60, 18], //Superior de Tecnologia em Logística
          [10, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [70, 22], //Licenciatura em Ciências Biológicas
          [10, 23], //Licenciatura em Computação
          [80, 24], //Licenciatura em Geografia
          [80, 25], //Licenciatura em História
          [60, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [40, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [70, 29], //Superior de Tecnologia em Logística
          [20, 30], //Bacharelado em Serviços Sociais
          [70, 31], //Bacharelado em Direito
          [60, 32], //Bacharelado em Odontologia
          [70, 33], //Bacharelado em Administração
          [10, 34], //Bacharelado em Medicina
          [80, 35], //Bacharelado em Engenharia Civil
          [60, 36], //Bacharelado em Engenharia da Computação
          [70, 37], //Bacharelado em Engenharia de Controle e Automação
          [60, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [50, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [70, 40], //Bacharelado em Engenharia - Telecomunicações
          [80, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [60, 43], //Bacharelado em Administração de Empresas
          [70, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [10, 48], //Bacharelado em Medicina
          [60, 49], //Bacharelado em Saúde Coletiva
          [40, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [10, 52], //Bacharelado em Ciências Biológicas
          [30, 53], //Bacharelado em Enfermagem
          [30, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Durante a manhã ou a tarde.",
        Values: [
          [20, 1], //Bacharelado em Enfermagem
          [30, 2], //Bacharelado em Fisioterapia
          [70, 3], //Bacharelado em Nutrição
          [20, 4], //Licenciatura em Ciências Biológicas
          [30, 5], //Licenciatura em Geografia
          [40, 6], //Licenciatura em História
          [40, 7], //Licenciatura em Letras Português/Espanhol
          [40, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [50, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [50, 15], //Licenciatura em Letras Português/Inglês
          [50, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [90, 19], //Bacharelado em Engenharia de Software
          [90, 20], //Bacharelado em Medicina
          [90, 21], //Bacharelado em Psicologia
          [30, 22], //Licenciatura em Ciências Biológicas
          [90, 23], //Licenciatura em Computação
          [30, 24], //Licenciatura em Geografia
          [20, 25], //Licenciatura em História
          [10, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [10, 27], //Licenciatura em Matemática
          [10, 28], //Licenciatura em Pedagogia
          [30, 29], //Superior de Tecnologia em Logística
          [40, 30], //Bacharelado em Serviços Sociais
          [50, 31], //Bacharelado em Direito
          [30, 32], //Bacharelado em Odontologia
          [50, 33], //Bacharelado em Administração
          [80, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [30, 36], //Bacharelado em Engenharia da Computação
          [30, 37], //Bacharelado em Engenharia de Controle e Automação
          [30, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [30, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [30, 41], //Bacharelado em Física de Materiais
          [30, 42], //Bacharelado em Mecânica Industrial
          [20, 43], //Bacharelado em Administração de Empresas
          [30, 44], //Bacharelado em Direito
          [40, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [30, 47], //Bacharelado em Administração
          [80, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [30, 50], //Licenciatura em Educação Física
          [40, 51], //Bacharelado em Educação Física
          [10, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [10, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  },
  {
    Question: "Você tem outras responsabilidades além dos estudos?",
    Options: [
      {
        Text: "Não. Apenas estudo.",
        Values: [
          [100, 1], //Bacharelado em Enfermagem
          [100, 2], //Bacharelado em Fisioterapia
          [100, 3], //Bacharelado em Nutrição
          [100, 4], //Licenciatura em Ciências Biológicas
          [100, 5], //Licenciatura em Geografia
          [100, 6], //Licenciatura em História
          [100, 7], //Licenciatura em Letras Português/Espanhol
          [100, 8], //Licenciatura em Letras Português/Inglês
          [100, 9], //Licenciatura em Matemática
          [100, 10], //Licenciatura em Pedagogia
          [100, 11], //Licenciatura em História
          [100, 12], //Licenciatura em Geografia
          [100, 13], //Licenciatura em Matemática
          [100, 14], //Licenciatura em Ciências Biológicas
          [100, 15], //Licenciatura em Letras Português/Inglês
          [100, 16], //Licenciatura em Letras Português/Espanhol
          [100, 17], //Licenciatura em Pedagogia
          [100, 18], //Superior de Tecnologia em Logística
          [100, 19], //Bacharelado em Engenharia de Software
          [100, 20], //Bacharelado em Medicina
          [100, 21], //Bacharelado em Psicologia
          [100, 22], //Licenciatura em Ciências Biológicas
          [100, 23], //Licenciatura em Computação
          [100, 24], //Licenciatura em Geografia
          [100, 25], //Licenciatura em História
          [100, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [100, 27], //Licenciatura em Matemática
          [100, 28], //Licenciatura em Pedagogia
          [100, 29], //Superior de Tecnologia em Logística
          [100, 30], //Bacharelado em Serviços Sociais
          [100, 31], //Bacharelado em Direito
          [100, 32], //Bacharelado em Odontologia
          [100, 33], //Bacharelado em Administração
          [100, 34], //Bacharelado em Medicina
          [100, 35], //Bacharelado em Engenharia Civil
          [100, 36], //Bacharelado em Engenharia da Computação
          [100, 37], //Bacharelado em Engenharia de Controle e Automação
          [100, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [100, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [100, 40], //Bacharelado em Engenharia - Telecomunicações
          [100, 41], //Bacharelado em Física de Materiais
          [100, 42], //Bacharelado em Mecânica Industrial
          [100, 43], //Bacharelado em Administração de Empresas
          [100, 44], //Bacharelado em Direito
          [100, 45], //Bacharelado em Odontologia
          [100, 46], //Bacharelado em Sistemas de Informação
          [100, 47], //Bacharelado em Administração
          [100, 48], //Bacharelado em Medicina
          [100, 49], //Bacharelado em Saúde Coletiva
          [100, 50], //Licenciatura em Educação Física
          [100, 51], //Bacharelado em Educação Física
          [100, 52], //Bacharelado em Ciências Biológicas
          [100, 53], //Bacharelado em Enfermagem
          [100, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Tenho. Trabalho por conta própria.",
        Values: [
          [25, 1], //Bacharelado em Enfermagem
          [25, 2], //Bacharelado em Fisioterapia
          [25, 3], //Bacharelado em Nutrição
          [40, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [50, 6], //Licenciatura em História
          [45, 7], //Licenciatura em Letras Português/Espanhol
          [45, 8], //Licenciatura em Letras Português/Inglês
          [60, 9], //Licenciatura em Matemática
          [40, 10], //Licenciatura em Pedagogia
          [60, 11], //Licenciatura em História
          [40, 12], //Licenciatura em Geografia
          [60, 13], //Licenciatura em Matemática
          [35, 14], //Licenciatura em Ciências Biológicas
          [60, 15], //Licenciatura em Letras Português/Inglês
          [60, 16], //Licenciatura em Letras Português/Espanhol
          [60, 17], //Licenciatura em Pedagogia
          [45, 18], //Superior de Tecnologia em Logística
          [50, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [25, 21], //Bacharelado em Psicologia
          [35, 22], //Licenciatura em Ciências Biológicas
          [35, 23], //Licenciatura em Computação
          [60, 24], //Licenciatura em Geografia
          [60, 25], //Licenciatura em História
          [45, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [60, 27], //Licenciatura em Matemática
          [60, 28], //Licenciatura em Pedagogia
          [45, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [30, 31], //Bacharelado em Direito
          [10, 32], //Bacharelado em Odontologia
          [40, 33], //Bacharelado em Administração
          [10, 34], //Bacharelado em Medicina
          [35, 35], //Bacharelado em Engenharia Civil
          [35, 36], //Bacharelado em Engenharia da Computação
          [35, 37], //Bacharelado em Engenharia de Controle e Automação
          [35, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [40, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [30, 40], //Bacharelado em Engenharia - Telecomunicações
          [20, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [50, 43], //Bacharelado em Administração de Empresas
          [50, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [45, 46], //Bacharelado em Sistemas de Informação
          [60, 47], //Bacharelado em Administração
          [10, 48], //Bacharelado em Medicina
          [40, 49], //Bacharelado em Saúde Coletiva
          [50, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [35, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [60, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Tenho. Sou pai/mãe de família e gerencio a casa.",
        Values: [
          [10, 1], //Bacharelado em Enfermagem
          [10, 2], //Bacharelado em Fisioterapia
          [30, 3], //Bacharelado em Nutrição
          [35, 4], //Licenciatura em Ciências Biológicas
          [40, 5], //Licenciatura em Geografia
          [45, 6], //Licenciatura em História
          [40, 7], //Licenciatura em Letras Português/Espanhol
          [40, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [50, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [50, 15], //Licenciatura em Letras Português/Inglês
          [50, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [40, 19], //Bacharelado em Engenharia de Software
          [10, 20], //Bacharelado em Medicina
          [30, 21], //Bacharelado em Psicologia
          [45, 22], //Licenciatura em Ciências Biológicas
          [35, 23], //Licenciatura em Computação
          [45, 24], //Licenciatura em Geografia
          [45, 25], //Licenciatura em História
          [40, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [50, 27], //Licenciatura em Matemática
          [50, 28], //Licenciatura em Pedagogia
          [50, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [50, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [50, 33], //Bacharelado em Administração
          [10, 34], //Bacharelado em Medicina
          [30, 35], //Bacharelado em Engenharia Civil
          [30, 36], //Bacharelado em Engenharia da Computação
          [40, 37], //Bacharelado em Engenharia de Controle e Automação
          [40, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [40, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [40, 40], //Bacharelado em Engenharia - Telecomunicações
          [35, 41], //Bacharelado em Física de Materiais
          [40, 42], //Bacharelado em Mecânica Industrial
          [40, 43], //Bacharelado em Administração de Empresas
          [40, 44], //Bacharelado em Direito
          [10, 45], //Bacharelado em Odontologia
          [40, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [10, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [50, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [50, 52], //Bacharelado em Ciências Biológicas
          [10, 53], //Bacharelado em Enfermagem
          [40, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Mas gostaria de trabalhar ou estagiar em meu curso no contraturno.",
        Values: [
          [50, 1], //Bacharelado em Enfermagem
          [50, 2], //Bacharelado em Fisioterapia
          [50, 3], //Bacharelado em Nutrição
          [50, 4], //Licenciatura em Ciências Biológicas
          [50, 5], //Licenciatura em Geografia
          [50, 6], //Licenciatura em História
          [50, 7], //Licenciatura em Letras Português/Espanhol
          [50, 8], //Licenciatura em Letras Português/Inglês
          [50, 9], //Licenciatura em Matemática
          [50, 10], //Licenciatura em Pedagogia
          [50, 11], //Licenciatura em História
          [50, 12], //Licenciatura em Geografia
          [50, 13], //Licenciatura em Matemática
          [50, 14], //Licenciatura em Ciências Biológicas
          [50, 15], //Licenciatura em Letras Português/Inglês
          [50, 16], //Licenciatura em Letras Português/Espanhol
          [50, 17], //Licenciatura em Pedagogia
          [50, 18], //Superior de Tecnologia em Logística
          [50, 19], //Bacharelado em Engenharia de Software
          [50, 20], //Bacharelado em Medicina
          [50, 21], //Bacharelado em Psicologia
          [50, 22], //Licenciatura em Ciências Biológicas
          [50, 23], //Licenciatura em Computação
          [50, 24], //Licenciatura em Geografia
          [50, 25], //Licenciatura em História
          [50, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [50, 27], //Licenciatura em Matemática
          [50, 28], //Licenciatura em Pedagogia
          [50, 29], //Superior de Tecnologia em Logística
          [50, 30], //Bacharelado em Serviços Sociais
          [50, 31], //Bacharelado em Direito
          [50, 32], //Bacharelado em Odontologia
          [50, 33], //Bacharelado em Administração
          [50, 34], //Bacharelado em Medicina
          [50, 35], //Bacharelado em Engenharia Civil
          [50, 36], //Bacharelado em Engenharia da Computação
          [50, 37], //Bacharelado em Engenharia de Controle e Automação
          [50, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [50, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [50, 40], //Bacharelado em Engenharia - Telecomunicações
          [50, 41], //Bacharelado em Física de Materiais
          [50, 42], //Bacharelado em Mecânica Industrial
          [50, 43], //Bacharelado em Administração de Empresas
          [50, 44], //Bacharelado em Direito
          [50, 45], //Bacharelado em Odontologia
          [50, 46], //Bacharelado em Sistemas de Informação
          [50, 47], //Bacharelado em Administração
          [50, 48], //Bacharelado em Medicina
          [50, 49], //Bacharelado em Saúde Coletiva
          [50, 50], //Licenciatura em Educação Física
          [50, 51], //Bacharelado em Educação Física
          [50, 52], //Bacharelado em Ciências Biológicas
          [50, 53], //Bacharelado em Enfermagem
          [50, 54] //Licenciatura em Ciências Sociais
        ]
      },
      {
        Text: "Não. Também não gostaria de ter que trabalhar ou estagiar em meu curso no contraturno.",
        Values: [
          [80, 1], //Bacharelado em Enfermagem
          [80, 2], //Bacharelado em Fisioterapia
          [80, 3], //Bacharelado em Nutrição
          [80, 4], //Licenciatura em Ciências Biológicas
          [80, 5], //Licenciatura em Geografia
          [80, 6], //Licenciatura em História
          [80, 7], //Licenciatura em Letras Português/Espanhol
          [80, 8], //Licenciatura em Letras Português/Inglês
          [80, 9], //Licenciatura em Matemática
          [80, 10], //Licenciatura em Pedagogia
          [80, 11], //Licenciatura em História
          [80, 12], //Licenciatura em Geografia
          [80, 13], //Licenciatura em Matemática
          [80, 14], //Licenciatura em Ciências Biológicas
          [80, 15], //Licenciatura em Letras Português/Inglês
          [80, 16], //Licenciatura em Letras Português/Espanhol
          [80, 17], //Licenciatura em Pedagogia
          [80, 18], //Superior de Tecnologia em Logística
          [80, 19], //Bacharelado em Engenharia de Software
          [80, 20], //Bacharelado em Medicina
          [80, 21], //Bacharelado em Psicologia
          [80, 22], //Licenciatura em Ciências Biológicas
          [80, 23], //Licenciatura em Computação
          [80, 24], //Licenciatura em Geografia
          [80, 25], //Licenciatura em História
          [80, 26], //Licenciatura em Letras (Português e suas Literaturas)
          [80, 27], //Licenciatura em Matemática
          [80, 28], //Licenciatura em Pedagogia
          [80, 29], //Superior de Tecnologia em Logística
          [80, 30], //Bacharelado em Serviços Sociais
          [80, 31], //Bacharelado em Direito
          [80, 32], //Bacharelado em Odontologia
          [80, 33], //Bacharelado em Administração
          [80, 34], //Bacharelado em Medicina
          [80, 35], //Bacharelado em Engenharia Civil
          [80, 36], //Bacharelado em Engenharia da Computação
          [80, 37], //Bacharelado em Engenharia de Controle e Automação
          [80, 38], //Bacharelado em Engenharia Elétrica - Eletrônica
          [80, 39], //Bacharelado em Engenharia Elétrica - Eletrotécnica
          [80, 40], //Bacharelado em Engenharia - Telecomunicações
          [80, 41], //Bacharelado em Física de Materiais
          [80, 42], //Bacharelado em Mecânica Industrial
          [80, 43], //Bacharelado em Administração de Empresas
          [80, 44], //Bacharelado em Direito
          [80, 45], //Bacharelado em Odontologia
          [80, 46], //Bacharelado em Sistemas de Informação
          [80, 47], //Bacharelado em Administração
          [80, 48], //Bacharelado em Medicina
          [80, 49], //Bacharelado em Saúde Coletiva
          [80, 50], //Licenciatura em Educação Física
          [80, 51], //Bacharelado em Educação Física
          [80, 52], //Bacharelado em Ciências Biológicas
          [80, 53], //Bacharelado em Enfermagem
          [80, 54] //Licenciatura em Ciências Sociais
        ]
      }
    ]
  }
];
