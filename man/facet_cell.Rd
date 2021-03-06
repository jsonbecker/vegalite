% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/cell.r
\encoding{UTF-8}
\name{facet_cell}
\alias{facet_cell}
\title{Facet cell aesthetics}
\usage{
facet_cell(vl, width = 200, height = 200, fill = NULL,
  fill_opacity = NULL, stroke = NULL, stroke_opacity = NULL,
  stroke_width = NULL, stroke_dash = NULL, stroke_dash_offset = NULL)
}
\arguments{
\item{vl}{Vega-Lite object}

\item{width, height}{width and height property of the cell configuration determine
the width of a visualization with a continuous x-scale and the height of
a visualization with a continuous y-scale respectively. Visit the
URL in the References section for more information.}

\item{fill}{fill color}

\item{fill_opacity}{\code{0.0}-\code{1.0}}

\item{stroke}{stroke color}

\item{stroke_opacity}{\code{0.0}-\code{1.0}}

\item{stroke_width}{stroke of the width in pixels}

\item{stroke_dash}{an array of alternating stroke, space lengths for creating
dashed or dotted lines.}

\item{stroke_dash_offset}{the offset (in pixels) into which to begin drawing with the stroke dash array.}
}
\description{
At its core, a Vega-Lite specification describes a single plot. When a facet
channel is added, the visualization is faceted into a trellis plot, which
contains multiple plots. Each plot in either a single plot or a trellis plot
is called a cell. Cell configuration allows us to customize each individual
single plot and each plot in a trellis plot.
}
\references{
\href{http://vega.github.io/vega-lite/docs/config.html#facet-config}{Vega-Lite Facet spec}
}

