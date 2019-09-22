import React from "react";
import { connect } from "react-redux";

import { fetchCourses } from "../actions";

import "./CourseList.scss";

class CourseList extends React.Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  getPastDay = (courseTime, presentTime) => {
    const courseTimeStamp = new Date(courseTime).getTime();
    const presentTimeStamp = new Date(presentTime).getTime();

    const diff = courseTimeStamp - presentTimeStamp;

    if (Math.sign(diff) === -1) {
      const day = Math.ceil((Math.sign(diff) * diff) / (1000 * 60 * 60 * 24));

      if (day <= 5) {
        return true;
      }
      return false;
    }

    return false;
  };

  getTimeStamp = time => {
    return new Date(time).getTime();
  };

  formatDate = time => {
    const fullDate = new Date(time);

    const nth = d => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];

    const getTime = hours => {
      if (hours > 12) {
        return `${hours - 12} P.M.`;
      } else if (hours < 12) {
        return `${hours} A.M.`;
      }
      return `${hours} P.M.`;
    };

    const date = fullDate.getDate();

    return `${date}${nth(date)} ${month[fullDate.getMonth()]}, ${getTime(
      fullDate.getHours()
    )} IST`;
  };

  renderCourses = () => {
    return this.props.courses.map(course => {
      const card = () => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={course.id}>
            <div style={cardStyle} className="course-card">
              <p className="course-card__category">{course.category}</p>
              <p className="course-card__title">{course.title}</p>
              <p className="course-card__date">
                {this.formatDate(course.date)}
              </p>
              <button className="course-card__btn">Register Now</button>
            </div>
          </div>
        );
      };

      const cardStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0, .3), rgba(0,0,0, .3)),url(${course.image_url})`
      };

      
      if (
        this.props.cat === course.category &&
        this.props.cat !== "all" &&
        this.props.time === 0 &&
        this.getTimeStamp(course.date) > this.getTimeStamp("2019-01-20")
      ) {
        return card();
      } else if (
        this.props.cat === "all" &&
        this.props.time === 0 &&
        this.getTimeStamp(course.date) > this.getTimeStamp("2019-01-20")
      ) {
        return card();
      } else if (
        this.props.cat === course.category &&
        this.props.cat !== "all" &&
        this.props.time === 1 &&
        this.getPastDay(
          this.getTimeStamp(course.date),
          this.getTimeStamp("2019-01-20")
        )
      ) {
        return card();
      } else if (
        this.props.cat === "all" &&
        this.props.time === 1 &&
        this.getPastDay(
          this.getTimeStamp(course.date),
          this.getTimeStamp("2019-01-20")
        )
      ) {
        return card();
      }

      return null;
    });
  };

  render() {
    if (this.props.courses) {
      return (
        <div className="container">
          <div className="row">{this.renderCourses()}</div>
        </div>
      );
    }
    return "loading....";
  }
}

const mapStateToprops = state => {
  return {
    courses: state.courses.coursesList,
    current_time: state.courses.current_time,
    cat: state.category,
    time: state.time
  };
};

export default connect(
  mapStateToprops,
  { fetchCourses }
)(CourseList);
