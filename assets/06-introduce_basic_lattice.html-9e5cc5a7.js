const t=JSON.parse('{"key":"v-ce408034","path":"/Travel_in_Cryptography/06-introduce_basic_lattice.html","title":"6.格相关的初步理解","lang":"zh-CN","frontmatter":{"title":"6.格相关的初步理解","date":"2024-01-29T23:47:02.000Z","icon":"file-lines","category":["CTF","Cryptography"],"description":"06.格相关的初步理解 从此处开始，为了表述清晰，我们有必要进行符号的约定： 数域，用黑板体表示，如“”等 向量，要么是，要么是​ 矩阵，粗体，正的字体，比如“”，通常是大写字母，小写字母通常表示退化成行列向量的矩阵 变量，斜字体，不加粗，如等 有非数学含义的量，正着的字体，不加粗，如“”，“”等 微分符号也是正着写的，但是这里应该不会用到 格与线性代数 通常我们在密码学题中说的“构造格”是构造一个高维的矩阵，矩阵里的行向量线性无关，由这些向量线性组合可以得到这个“格”规定空间中的其他向量，这些向量构成一个“格”。","head":[["meta",{"property":"og:url","content":"https://someijam.github.io/SomeiWiki/SomeiWiki/Travel_in_Cryptography/06-introduce_basic_lattice.html"}],["meta",{"property":"og:site_name","content":"SomeiWiki"}],["meta",{"property":"og:title","content":"6.格相关的初步理解"}],["meta",{"property":"og:description","content":"06.格相关的初步理解 从此处开始，为了表述清晰，我们有必要进行符号的约定： 数域，用黑板体表示，如“”等 向量，要么是，要么是​ 矩阵，粗体，正的字体，比如“”，通常是大写字母，小写字母通常表示退化成行列向量的矩阵 变量，斜字体，不加粗，如等 有非数学含义的量，正着的字体，不加粗，如“”，“”等 微分符号也是正着写的，但是这里应该不会用到 格与线性代数 通常我们在密码学题中说的“构造格”是构造一个高维的矩阵，矩阵里的行向量线性无关，由这些向量线性组合可以得到这个“格”规定空间中的其他向量，这些向量构成一个“格”。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T06:01:49.000Z"}],["meta",{"property":"article:author","content":"Someijam"}],["meta",{"property":"article:published_time","content":"2024-01-29T23:47:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-16T06:01:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.格相关的初步理解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T23:47:02.000Z\\",\\"dateModified\\":\\"2024-02-16T06:01:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Someijam\\",\\"url\\":\\"https://blog.someijam.cn\\",\\"email\\":\\"lingsomeijam1@outlook.com\\"}]}"]]},"headers":[],"git":{"createdTime":1708063309000,"updatedTime":1708063309000,"contributors":[{"name":"Someijam","email":"lingsomeijam1@outlook.com","commits":1}]},"readingTime":{"minutes":5.58,"words":1675},"filePathRelative":"Travel_in_Cryptography/06-introduce_basic_lattice.md","localizedDate":"2024年1月29日","excerpt":"<h1> 06.格相关的初步理解</h1>\\n<p>从此处开始，为了表述清晰，我们有必要进行符号的约定：</p>\\n<ul>\\n<li>数域，用黑板体表示，如“”等</li>\\n<li>向量，要么是，要么是​</li>\\n<li>矩阵，粗体，正的字体，比如“”，通常是大写字母，小写字母通常表示退化成行列向量的矩阵</li>\\n<li>变量，斜字体，不加粗，如等</li>\\n<li>有非数学含义的量，正着的字体，不加粗，如“”，“”等</li>\\n<li>微分符号也是正着写的，但是这里应该不会用到</li>\\n</ul>\\n<h1> 格与线性代数</h1>\\n<p>通常我们在密码学题中说的“构造格”是构造一个高维的矩阵，矩阵里的行向量线性无关，由这些向量线性组合可以得到这个“格”规定空间中的其他向量，这些向量构成一个“格”。</p>","autoDesc":true}');export{t as data};
