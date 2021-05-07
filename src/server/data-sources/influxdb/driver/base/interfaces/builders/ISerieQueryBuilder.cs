﻿#region Usings
using System.Collections.Generic;

#endregion

namespace ED.Drivers.Influx
{
	public interface ISerieQueryBuilder
	{
		#region Class public methods
		/// <summary>
		/// Gets distinct series.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">Measurement name (optional).</param>
		/// <param name="filters">A collection of "WHERE" clause filters (optional).</param>
		/// <returns></returns>
		string GetSeries( string dbName, string measurementName = null, IEnumerable<string> filters = null );
		/// <summary>
		/// Deletes all data points from a serie.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">Measurement name.</param>
		/// <param name="filters">A collection of "WHERE" clause filters (optional).</param>
		/// <returns></returns>
		string DropSeries( string dbName, string measurementName, IEnumerable<string> filters = null );
		/// <summary>
		/// Deletes all data points from multiple series.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">A collection of measurement names.</param>
		/// <param name="filters">A collection of "WHERE" clause filters (optional).</param>
		/// <returns></returns>
		string DropSeries( string dbName, IEnumerable<string> measurementNames, IEnumerable<string> filters = null );
		/// <summary>
		/// Gets distinct measurements.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="filters">A collection of "WHERE" clause filters (optional).</param>
		/// <returns></returns>
		string GetMeasurements( string dbName, IEnumerable<string> filters = null );
		/// <summary>
		/// Deletes all data points and series itself. Unlike DROP SERIES it also deletes
		/// the measurement from the index.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">Measurement name.</param>
		/// <returns></returns>
		string DropMeasurement( string dbName, string measurementName );
		/// <summary>
		/// Gets the tag keys for a given measurement.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">Measurement name.</param>
		/// <returns></returns>
		string GetTagKeys( string dbName, string measurementName );
		/// <summary>
		/// Gets the tag values for a given measurement.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">Measurement name.</param>
		/// <param name="tagName">Tag name.</param>
		/// <returns></returns>
		string GetTagValues( string dbName, string measurementName, string tagName );
		/// <summary>
		/// Gets the field keys for a given measurement.
		/// </summary>
		/// <param name="dbName">Database name.</param>
		/// <param name="measurementName">Measurement name.</param>
		/// <returns></returns>
		string GetFieldKeys( string dbName, string measurementName );
		#endregion
	}
}