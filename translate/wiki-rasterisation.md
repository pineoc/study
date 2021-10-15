{{Short description|Computer graphics manipulation technique}}{{refimprove|date=September 2018}}
[[File:Raster graphic fish 20x23squares sdtv-example.png|thumb|right|200px|raster graphic image]]
<!-- 위 [[]]는 래스터 그래픽 이미지를 나타냄-->
<!-- '''Rasterization''' (or '''rasterisation''') is the task of taking an image described in a [[vector graphics]] format (shapes) and converting it into a [[raster image]] (a series of [[pixel]]s, dots or lines, which,  when displayed together, create the image which was represented via shapes).<ref name="Worboys1995">{{cite book|author=Michael F. Worboys|title=GIS: A Computer Science Perspective|url=https://books.google.com/books?id=duT2fcnQeJMC&pg=PA232|date=30 October 1995|publisher=CRC Press|isbn=978-0-7484-0065-2|pages=232–}}</ref><ref name="Chang2007">{{cite book|author=Kang-Tsung Chang|title=Programming ArcObjects with VBA: A Task-Oriented Approach, Second Edition|url=https://books.google.com/books?id=1DOY9xuxcosC&pg=PA91|date=27 August 2007|publisher=CRC Press|isbn=978-1-4200-0918-7|pages=91–}}</ref> The rasterized image may then be  displayed on a [[computer display]], [[video display]] or [[computer printer|printer]], or stored in a [[bitmap]] file format. Rasterization may refer to the technique of drawing [[3D model (computer graphics)|3D model]]s, or the conversion of 2D [[rendering primitive]]s such as [[polygon]]s, [[line segment]]s into a rasterized format. -->
'''래스터화'''(영어: Rasterisation 또는 Rasterization)은 [[벡터 그래픽]] 형식(쉐이프)으로 설명된 이미지를 [[래스터 이미지]]([[픽셀]], 점 또는 선 시리즈, 함께 표시될 때 도형을 통해 표현된 이미지를 생성하는 작업)로 변환하는 작업이다.<ref name="Worboys1995">{{cite book|author=Michael F. Worboys|title=GIS: A Computer Science Perspective|url=https://books.google.com/books?id=duT2fcnQeJMC&pg=PA232|date=30 October 1995|publisher=CRC Press|isbn=978-0-7484-0065-2|pages=232–}}</ref><ref name="Chang2007">{{cite book|author=Kang-Tsung Chang|title=Programming ArcObjects with VBA: A Task-Oriented Approach, Second Edition|url=https://books.google.com/books?id=1DOY9xuxcosC&pg=PA91|date=27 August 2007|publisher=CRC Press|isbn=978-1-4200-0918-7|pages=91–}}</ref> 래스터화된 이미지는 [[컴퓨터 디스플레이]], [[비디오 디스플레이]] 또는 프린터에 표시되거나 비트맵 파일 형식으로 저장될 수 있다. 래스터화는 [[3D 모델]]을 그리는 기술 또는 [[폴리곤]], [[선 세그먼트]]와 같은 2D [[렌더링 기초 요소]]를 래스터화 형식으로 변환하는 기술을 말한다.

<!-- The term is derived from German ''Raster'' ('framework, schema'), from the [[Latin]] ''[[Rastrum|rāstrum]]'', "scraper, rake".<ref>{{OEtymD|raster}}</ref><ref>{{L&S|rastrum|ref}}</ref> -->
이 용어는 [[라틴어]] ''[[Rastrum|rāstrum]]'', "스크레퍼, 갈퀴"<ref>{{OEtymD|raster}}</ref><ref>{{L&S|rastrum|ref}}</ref>에서 유래한 독일어 ''Raster''('프레임워크, 스키마')에서 유래되었다.

== 3D 이미지의 래스터화 ==
<!-- Rasterization is one of the typical techniques of rendering 3D models. Compared with other rendering techniques such as [[Ray tracing (graphics)|ray tracing]], rasterization is extremely fast and therefore used in most realtime 3D engines. However, rasterization is simply the process of computing the mapping from scene geometry to pixels and does not prescribe a particular way to compute the color of those pixels. The specific color of each pixel is assigned by [[shading]] (which in modern GPUs is completely [[Shading language|programmable]]). Shading may be based on physical laws, their approximations or purely artistic intent. -->
래스터화는 3D 모델을 렌더링하는 일반적인 기술 중 하나다. [[광선 추적]](''Ray Tracing'')과 같은 다른 렌더링 기법에 비해 래스터화는 매우 빠르기 때문에 대부분의 실시간 3D 엔진에서 사용된다. 그러나 래스터화는 장면 기하학(''scene geometry'')에서 픽셀로의 매핑을 계산하는 프로세스일 뿐, 해당 픽셀의 색상을 계산하는 특정한 방법을 규정하지는 않는다. 각 픽셀의 특정 색상은 [[음영]](''쉐이딩'', ''shading'')(현대 GPU에서는 완전히 프로그래밍할 수 있음)에 의해 할당된다. 음영은 물리적 법칙, 근사치 또는 순수한 예술적 의도에 기반할 수 있다.

<!-- The process of rasterizing 3D models onto a 2D plane for display on a [[computer screen]] ("[[screen space]]") is often carried out by fixed function (non-programmable) hardware within the [[graphics pipeline]]. This is because there is no motivation for modifying the techniques for rasterization used at render time{{clarification needed|date=August 2016}} and a special-purpose system allows for high efficiency. -->
[[컴퓨터 화면]]("[[화면 공간]]")에 표시하기 위해 3D 모델을 2D 평면에 래스터화하는 프로세스는 [[그래픽 파이프라인]] 내의 고정 기능(프로그래밍 불가) 하드웨어에 의해 수행되는 경우가 많다. 이는 렌더링 시간에 사용되는 래스터화 기술을 수정할 동기가 없고 특수 목적의 시스템이 높은 효율성을 허용하기 때문이다.

<!-- === Triangle rasterization ===
[[File:Top-left triangle rasterization rule.gif|thumb|right|rasterizing triangles using the top-left rule]]
A common representation of digital 3D models is [[Polygon mesh|polygonal]]. Before rasterization, individual polygons are broken down into triangles, therefore a typical problem to solve in 3D rasterization is rasterization of a triangle. Properties that are usually required from triangle rasterization algorithms are that rasterizing two adjacent triangles (i.e. those that share an edge) -->
=== 삼각형 래스터화 ===
[[File:Top-left triangle rasterization rule.gif|thumb|right|rasterizing triangles using the top-left rule]]
디지털 3D 모델의 일반적인 표현은 다각형이다. 래스터화 전에 개별 다각형이 삼각형으로 분해되므로 3D 래스터화로 풀어야 하는 일반적인 문제는 삼각형의 래스터화다. 일반적으로 삼각형 래스터화 알고리즘에 필요한 속성은 인접한 두 삼각형(예: 모서리를 공유하는 삼각형)의 래스터화다.

<!-- # leaves no holes (non-rasterized pixels) between the triangles, so that the rasterized area is completely filled (just as the surface of adjacent triangles). And
# no pixel is rasterized more than once, i.e. the rasterized triangles don't overlap. This is to guarantee that the result doesn't depend on the order in which the triangles are rasterized. Overdrawing pixels can also mean wasting computing power on pixels that would be overwritten.

This leads to establishing '''rasterization rules''' to guarantee the above conditions. One set of such rules is called a '''top-left rule''', which states that a pixel is rasterized if and only if

# its center lies completely inside the triangle. Or
# its center lies exactly on the triangle edge (or multiple edges in case of corners) that is (or, in case of corners, all are) either ''top'' or ''left'' edge.

A ''top'' edge is an edge that is exactly horizontal and lies above other edges, and a ''left'' edge is a non-horizontal edge that is on the left side of the triangle.

This rule is implemented e.g. by [[Direct3D]]<ref>{{cite web |title=Rasterization Rules (Direct3D 9) |url=https://docs.microsoft.com/en-us/windows/win32/direct3d9/rasterization-rules |website=Microsoft Docs |access-date=19 April 2020}}</ref> and many [[OpenGL]] implementations (even though the specification doesn't define it and only requires a consistent rule<ref>{{cite book |title=OpenGL 4.6 |page=478 |url=https://www.khronos.org/registry/OpenGL/specs/gl/glspec46.core.pdf}}</ref>). -->

# 삼각형 사이에 구멍(래스터화되지 않은 픽셀)을 남기지 않으므로 래스터화된 영역이 인접한 삼각형의 표면과 동일하게 완전히 채워진다.
# 그리고 픽셀이 두 번 이상 래스터화되지 않는다. 즉 래스터화된 삼각형이 겹치지 않는다. 이는 삼각형이 래스터화되는 순서에 따라 결과가 달라지지 않도록 하기 위한 것이다. 픽셀을 과도하게 그리면 덮어쓰게 되는 픽셀에 대한 계산 능력이 낭비될 수도 있다.

이는 위의 조건을 보장하기 위한 래스터화 규칙을 확립하는 것으로 이어진다. 이러한 규칙 집합 중 하나를 왼쪽 상단 규칙(''top-left rule'')이라고 하며, 다음과 같은 경우에 픽셀은 래스터화된다.

# 픽셀의 중심이 완전히 삼각형 안에 있을 경우.
# 픽셀의 중심이 정확히 삼각형 모서리(또는 모서리의 경우 여러 모서리)에 있으며, 모서리의 경우 ''상단'' 또는 ''왼쪽'' 모서리 중 하나인 경우.

''위쪽'' 모서리는 정확히 수평이면서 다른 모서리 위에 있는 모서리이고, ''왼쪽'' 모서리는 삼각형의 왼쪽에 있는 수평이 아닌 모서리다.

이 규칙은 예를 들면 [[Direct3D]]<ref>{{cite web |title=Rasterization Rules (Direct3D 9) |url=https://docs.microsoft.com/en-us/windows/win32/direct3d9/rasterization-rules |website=Microsoft Docs |access-date=19 April 2020}}</ref> 및 많은 [[OpenGL]] 구현에 의해 구현된다.(규격에서 정의하지 않고 일관된 규칙만 필요함<ref>{{cite book |title=OpenGL 4.6 |page=478 |url=https://www.khronos.org/registry/OpenGL/specs/gl/glspec46.core.pdf}}</ref>).

== 품질 ==
<!-- [[File:Pixel vs subpixel precision.gif|thumb|right|Pixel (left) vs sub-pixel (right) precision]]
The quality of rasterization can be improved by [[spatial anti-aliasing|antialiasing]], which creates "smooth" edges. [[sub-pixel resolution|Sub-pixel precision]] is a method which takes into account positions on a finer scale than the pixel grid and can produce different results even if the endpoints of a primitive fall into same pixel coordinates, producing smoother movement animations. Simple or older hardware, such as [[PlayStation 1]], lacked sub-pixel precision in 3D rasterization.<ref>{{cite web |title=PlayStation rasterization issues |url=https://www.libretro.com/index.php/mednafenbeetle-psx-pgxp-arrives/#more-45256 |website=Libretro |access-date=19 April 2020}}</ref> -->

[[File:Pixel vs subpixel precision.gif|thumb|right|픽셀 (왼쪽) vs 서브픽셀 (오른쪽) 정밀도]]
래스터화의 품질은 "매끄러운" 모서리를 생성하는 [[안티앨리어싱]]으로 개선할 수 있다. [[서브픽셀 정밀도]]는 픽셀 그리드보다 더 미세한 스케일의 위치를 고려하는 방법으로, 원시적인 픽셀의 끝점이 동일한 픽셀 좌표로 떨어져도 다른 결과를 생성하여 보다 부드러운 이동 애니메이션을 생성할 수 있다. [[플레이스테이션 1]]과 같이 단순하거나 오래된 하드웨어는 3D 래스터화에서 서브픽셀 정밀도가 부족했다.<ref>{{cite web |title=PlayStation rasterization issues |url=https://www.libretro.com/index.php/mednafenbeetle-psx-pgxp-arrives/#more-45256 |website=Libretro |access-date=19 April 2020}}</ref>

== 참고 문서 ==
{{reflist}}

== 외부 링크 ==
* [http://www.drdobbs.com/parallel/184404919 Michael Abrash’s articles on computer graphics]
* [https://msdn.microsoft.com/en-us/library/windows/desktop/ff476882(v=vs.85).aspx Microsoft’s DirectX API]
* [http://www.opengl.org OpenGL API]
* [http://mathworld.wolfram.com/topics/MatrixTypes.html Matrices (including transformation matrices) from MathWorld]
* [http://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation Rasterization, a Practical Implementation]
