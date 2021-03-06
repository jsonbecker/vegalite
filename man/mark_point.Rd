% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/mark.r
\encoding{UTF-8}
\name{mark_point}
\alias{mark_point}
\title{Point mark}
\usage{
mark_point(vl, shape = "circle", size = NULL, opacity = NULL,
  filled = NULL, color = NULL, fill = NULL, stroke = NULL)
}
\arguments{
\item{vl}{Vega-Lite object}

\item{shape}{The symbol shape to use. One of \code{circle}, \code{square},
\code{cross}, \code{diamond}, \code{triangle-up}, or \code{triangle-down}.
Default value: \code{circle}.}

\item{size}{The pixel area each the point. For example: in the case of circles,
the radius is determined in part by the square root of the size value.}

\item{opacity}{\code{0.0}-\code{1.0}}

\item{filled}{whether the shape's color should be used as fill color instead of stroke color.}

\item{color}{color of the mark – either fill or stroke color based on the filled mark config.}

\item{fill}{fill color. This config will be overridden by color channel’s
specified or mapped values if filled is true.}

\item{stroke}{stroke color. This config will be overridden by color channel’s
specified or mapped values if filled is false.}
}
\description{
A point mark represents each data point with a symbol.
}
\examples{
vegalite() \%>\%
  add_data("https://vega.github.io/vega-editor/app/data/cars.json") \%>\%
  encode_x("Horsepower", "quantitative") \%>\%
  encode_y("Miles_per_Gallon", "quantitative") \%>\%
  mark_point()
}
\references{
\href{http://vega.github.io/vega-lite/docs/mark.html}{Vega-Lite Mark spec}
}

