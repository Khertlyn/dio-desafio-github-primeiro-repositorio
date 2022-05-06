<!doctype html>
<HTML>
	<head>
		<meta charset="utf-8">
		<title>Curso de HTML DIO</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<header>
			<img src="perfil.jpeg" alt="Foto da autora" width="100" class="post-image">
			<h1 id="title">Curso de HTML e CSS DIO</h1> <!--Único H1 da página-->
		</header>
		<section>
			<header>
				<h2 class="subtitle">Lista de postagens</h2>
			</header>
			<p class="post-content">Essa sessão será usada para exbir as anotações do curso de HTML 
			com explicações da TAG e atributos. </p>
			<article class="post">
				<header>
					<h3 class="post_title">Inserindo link</h3>
				</header>
					<p>Para inserir um link 
					é necessário usar o a com atributo href="https://www.linkedin.com/in/khertlyn-louback-a10b94150" e o atributo target="_blank" esse atributo indica que o link será aberto em outra aba  
					</p>
			</article>
			<article class="post">
				<header>
					<h3 class="post_title">Portas mais utilizadas</h3>
				</header>
				<ul>
					<li>20 FTP</li>
					<li>22 SSH</li>
					<li>25 SMTP</li>
					<li>53 DNS</li>
					<li>80 HTTP</li>
					<li>443 HTTPS</li>
				</ul>
			</article>
			<article class="post">
				<header>
					<h3 class="post_title">Repetição</h3>
				</header>
				<?php
					for ($i = 0 ; $i < 5 ; $i++ ) {
					print ( "Linha número" . $i . "<br />");
					}
				?>
			</article>
			<article class="post">
				<header>
					<h3 class="post_title">Formatacao CSS</h3>
				</header>
				<p class="post-content">
					Alterando formatação da fonte
					font-family ; font-size ; font-style : italic,
					
					ID: é representado pelo símbolo # (hash) seguido de um nome para esse ID.
					Classe: a classe é representada de forma parecida do ID, mas é precedida por um ponto em vez do hash.
					caixa é composta por 4 áreas: o conteúdo, o padding, a borda e a margem
					3 formas de colocar cor
					A primeira é pelo nome da cor em inglês, a segunda é pelo código hexadecimal e a terceira é usando apenas o atalho background.
					Border palavras chave
					solid: mostra uma borda simples e reta;

					dotted: são bolinhas com um pequeno espaçamento entre elas;

					dashed: forma uma linha tracejada.		

					E se você não quiser usar a propriedade border existem as propriedade específicas para cada aspecto de uma borda, são elas border-width para a largura, border-color para a cor e border-style para o estilo.
					
					E a última propriedade é o border-radius, ele permite arredondar os cantos de um elemento
					Ordem para declacar valores diferentes superior,direita,inferior,esquerdo , ou pode ser declarado border-top / right/bottom/left
					
					dimensão e alinhamento
					Width
					Height
					Max-width
					Max-height
					
					margin
					text-align
				</p>
			</article>
		</section>
	<footer>
		<h3>Contato:</h3>
		<h4> Khertlyn <h4>
		<ul class="contact-list">
			<li>33 8459-6040</li>
			<li>
				<a href="https://www.linkedin.com/in/khertlyn-louback-a10b94150" target="_blank"> LinkedIn Khertlyn </a>
			</li>	
			<li>
				<a href="mailto:khertlynl12@gmail.com" target="_blank">E-mail Khertlyn</a>
			</li>
			<li>
				<a href="https://web.dio.me/track/spread-fullstack-developer" target="_blank">GitHub Khertlyn</a>
			</li>
		</ul>
	</footer>
</body>
</html>